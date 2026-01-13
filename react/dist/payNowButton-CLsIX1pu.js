import { r as reactExports, H as getWebSocketUrl, z as zt, j as jsxRuntimeExports, i as classNames, p as post } from "./main-B7w5eCOl.js";
import { c as computeTotalAmount } from "./computeTotalAmount-RO07i90B.js";
import { V as ValidationMessage } from "./validationMessage-D3Gjn0ek.js";
import { F as ForwardRef } from "./CheckCircleIcon-BMZ-5cUh.js";
import { F as ForwardRef$1 } from "./CreditCardIcon-ByH6krF8.js";
import { F as ForwardRef$2 } from "./ExclamationTriangleIcon-D83nSzlE.js";
class WebSocketService {
  constructor() {
    this.ws = null;
    this.listeners = /* @__PURE__ */ new Map();
    this.reconnectAttempts = 0;
    this.maxReconnectAttempts = 60;
    this.reconnectDelay = 3e4;
    this.isIntentionallyClosed = false;
  }
  /**
   * Connect to WebSocket server
   * @param {string} url - WebSocket server URL
   * @param {object} options - Connection options
   */
  connect(url, options = {}) {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      console.log("WebSocket already connected");
      return;
    }
    this.isIntentionallyClosed = false;
    try {
      const wsUrl = this.buildUrl(url, options.queryParams);
      this.ws = new WebSocket(wsUrl);
      this.ws.onopen = () => {
        console.log("WebSocket connected");
        this.reconnectAttempts = 0;
        this.notifyListeners("connection", { status: "connected" });
        if (options.token) {
          this.send("authenticate", { token: options.token });
        }
      };
      this.ws.onmessage = (event) => {
        try {
          const message = JSON.parse(event.data);
          console.log("WebSocket message received:", message);
          this.notifyListeners(message.type || "message", message.data || message);
        } catch (error) {
          console.error("Error parsing WebSocket message:", error);
        }
      };
      this.ws.onerror = (error) => {
        console.error("WebSocket error:", error);
        this.notifyListeners("error", { error });
      };
      this.ws.onclose = () => {
        console.log("WebSocket disconnected");
        this.notifyListeners("connection", { status: "disconnected" });
        if (!this.isIntentionallyClosed && this.reconnectAttempts < this.maxReconnectAttempts) {
          this.reconnectAttempts++;
          console.log(`Attempting to reconnect (${this.reconnectAttempts}/${this.maxReconnectAttempts})...`);
          const delay = this.reconnectAttempts <= 5 ? 3e3 : 3e4;
          setTimeout(() => this.connect(url, options), delay);
        }
      };
    } catch (error) {
      console.error("Error connecting to WebSocket:", error);
    }
  }
  /**
   * Build WebSocket URL with query parameters
   */
  buildUrl(baseUrl, queryParams = {}) {
    if (!queryParams || Object.keys(queryParams).length === 0) {
      return baseUrl;
    }
    const params = new URLSearchParams(queryParams);
    return `${baseUrl}?${params.toString()}`;
  }
  /**
   * Subscribe to a specific message type
   * @param {string} messageType - Type of message to listen for
   * @param {function} callback - Callback function when message is received
   * @returns {function} Unsubscribe function
   */
  subscribe(messageType, callback) {
    if (!this.listeners.has(messageType)) {
      this.listeners.set(messageType, /* @__PURE__ */ new Set());
    }
    this.listeners.get(messageType).add(callback);
    return () => {
      this.unsubscribe(messageType, callback);
    };
  }
  /**
   * Unsubscribe from a message type
   */
  unsubscribe(messageType, callback) {
    if (this.listeners.has(messageType)) {
      this.listeners.get(messageType).delete(callback);
      if (this.listeners.get(messageType).size === 0) {
        this.listeners.delete(messageType);
      }
    }
  }
  /**
   * Notify all listeners of a message type
   */
  notifyListeners(messageType, data) {
    if (this.listeners.has(messageType)) {
      this.listeners.get(messageType).forEach((callback) => {
        try {
          callback(data);
        } catch (error) {
          console.error(`Error in listener callback for ${messageType}:`, error);
        }
      });
    }
  }
  /**
   * Send a message through WebSocket
   * @param {string} type - Message type
   * @param {object} data - Message data
   */
  send(type, data = {}) {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      const message = JSON.stringify({ type, data });
      this.ws.send(message);
    } else {
      console.warn("WebSocket is not connected. Cannot send message.");
    }
  }
  /**
   * Disconnect from WebSocket
   */
  disconnect() {
    this.isIntentionallyClosed = true;
    if (this.ws) {
      this.ws.close();
      this.ws = null;
    }
    this.listeners.clear();
    this.reconnectAttempts = 0;
  }
  /**
   * Check if WebSocket is connected
   */
  isConnected() {
    return this.ws && this.ws.readyState === WebSocket.OPEN;
  }
}
const websocketService = new WebSocketService();
const useWebSocket = (url = null, options = {}) => {
  const [isConnected, setIsConnected] = reactExports.useState(false);
  const [messages, setMessages] = reactExports.useState([]);
  const [isSupported, setIsSupported] = reactExports.useState(true);
  const [connectionTimeout, setConnectionTimeout] = reactExports.useState(false);
  const subscriptionsRef = reactExports.useRef([]);
  const disconnectTimeRef = reactExports.useRef(null);
  const timeoutRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    setIsSupported(typeof WebSocket !== "undefined");
    if (url && typeof WebSocket !== "undefined") {
      websocketService.connect(url, options);
    }
    const unsubscribeConnection = websocketService.subscribe("connection", (data) => {
      const connected = data.status === "connected";
      setIsConnected(connected);
      if (connected) {
        disconnectTimeRef.current = null;
        setConnectionTimeout(false);
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
          timeoutRef.current = null;
        }
      } else if (!connected && disconnectTimeRef.current === null) {
        disconnectTimeRef.current = Date.now();
        timeoutRef.current = setTimeout(() => {
          setConnectionTimeout(true);
        }, 6e4);
      }
    });
    subscriptionsRef.current.push(unsubscribeConnection);
    return () => {
      subscriptionsRef.current.forEach((unsubscribe) => unsubscribe());
      subscriptionsRef.current = [];
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [url, options.token]);
  const subscribe = (messageType, callback) => {
    const unsubscribe = websocketService.subscribe(messageType, callback);
    subscriptionsRef.current.push(unsubscribe);
    return unsubscribe;
  };
  const send = (type, data) => {
    websocketService.send(type, data);
  };
  const disconnect = () => {
    websocketService.disconnect();
    setIsConnected(false);
  };
  return {
    isConnected,
    isSupported,
    connectionTimeout,
    messages,
    subscribe,
    send,
    disconnect
  };
};
const paymentGateways = [
  {
    name: "PayPal",
    imageOnly: false,
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", className: "w-8 h-8 text-blue-600", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M7.5 4.5c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h3.375l-.375 1.5H7.5c-.621 0-1.125.504-1.125 1.125S6.879 21 7.5 21h2.25l1.5-6h2.625c3.75 0 6-1.875 6-5.625 0-2.25-1.125-4.5-4.5-4.5H7.5zm0 1.5h7.125c2.25 0 3 .75 3 2.625 0 2.25-1.125 3-3.75 3H10.5l-.75 3H9l1.125-4.5H7.5c-.621 0-1.125-.504-1.125-1.125V5.625c0-.621.504-1.125 1.125-1.125z" }) })
  },
  {
    name: "Stripe",
    imageOnly: false,
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 bg-purple-600 rounded text-white flex items-center justify-center font-bold text-sm", children: "S" })
  },
  {
    name: "Razorpay",
    imageOnly: false,
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 bg-blue-800 rounded text-white flex items-center justify-center font-bold text-sm", children: "R" })
  },
  {
    name: "Paytm",
    imageOnly: false,
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 bg-blue-500 rounded text-white flex items-center justify-center font-bold text-sm", children: "P" })
  },
  {
    name: "RoyalXpay",
    imageOnly: true,
    imageUrl: "https://royalxpay.com/assets_frontend/images/RoyalXpay-whitewithtransparent.png",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gray-800 px-4 pb-2 rounded", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://royalxpay.com/assets_frontend/images/RoyalXpay-whitewithtransparent.png", alt: "RoyalXpay", className: "w-full  h-10 object-contain" }) })
  }
];
const RenderPaymentGatewayIcon = ({ gateway }) => {
  const gatewayConfig = paymentGateways.find((g) => g.name === gateway);
  if (gatewayConfig) {
    return gatewayConfig.icon;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$1, { className: "w-8 h-8 text-primary" });
};
const PayNowButton = ({
  label,
  errors,
  register,
  formData,
  isPlayGround,
  onChangeValue,
  disabled,
  readOnly,
  optional,
  component,
  eventDetails,
  competitions,
  participantsList,
  selectedCompetitions
}) => {
  console.log("PayNowButton props:", { label, errors, formData, isPlayGround, disabled, readOnly, optional, component });
  console.log("PayNowButton competitions data:", { competitions, selectedCompetitions, competitionsLength: competitions?.length, selectedLength: selectedCompetitions?.length });
  const fieldName = "paymentCompleted";
  const [isProcessing, setIsProcessing] = reactExports.useState(false);
  const [paymentStatus, setPaymentStatus] = reactExports.useState([]);
  const [currentOrderId, setCurrentOrderId] = reactExports.useState(null);
  const [paymentWindowOpened, setPaymentWindowOpened] = reactExports.useState(false);
  const [paymentWindowOpenedAt, setPaymentWindowOpenedAt] = reactExports.useState(null);
  const paymentGateway = component?.paymentGateway || "PayPal";
  component?.secretKey || "";
  component?.webhookUrl || "";
  const wsUrl = getWebSocketUrl();
  const { isConnected, isSupported, connectionTimeout, subscribe } = useWebSocket(wsUrl, {
    queryParams: {
      userId: formData?.userRoleId || participantsList?.[0]?.UserRoleId || "",
      type: "payment"
    }
  });
  let errorsForField = errors?.[fieldName];
  let [error, setError] = reactExports.useState(errorsForField);
  reactExports.useEffect(() => {
    setError(errors?.[fieldName]);
  }, [errors?.[fieldName]]);
  reactExports.useEffect(() => {
    if (paymentWindowOpened && paymentWindowOpenedAt) {
      const timeout = setTimeout(() => {
        setPaymentWindowOpened(false);
        setPaymentWindowOpenedAt(null);
        setIsProcessing(false);
      }, 6e4);
      return () => clearTimeout(timeout);
    }
  }, [paymentWindowOpened, paymentWindowOpenedAt]);
  reactExports.useEffect(() => {
    const unsubscribeCalc = subscribe("payment:calculation:success", (data) => {
      if (data.orderId && (data.orderId === currentOrderId || !currentOrderId && isProcessing)) {
        setPaymentStatus((prev) => [
          ...prev,
          {
            type: "calculation",
            status: "success",
            message: "Payment calculation completed successfully",
            timestamp: (/* @__PURE__ */ new Date()).toISOString(),
            data
          }
        ]);
      }
    });
    const unsubscribeOrder = subscribe("payment:order:created", (data) => {
      if (data.orderId && (!currentOrderId || data.orderId === currentOrderId)) {
        if (!currentOrderId) setCurrentOrderId(data.orderId);
        setPaymentStatus((prev) => [
          ...prev,
          {
            type: "order",
            status: "created",
            message: "Payment order created successfully",
            timestamp: (/* @__PURE__ */ new Date()).toISOString(),
            data
          }
        ]);
      }
    });
    const unsubscribeTrans = subscribe("payment:transaction:created", (data) => {
      if (data.orderId && data.orderId === currentOrderId) {
        setPaymentStatus((prev) => [
          ...prev,
          {
            type: "transaction",
            status: "created",
            message: "Payment link generated successfully",
            timestamp: (/* @__PURE__ */ new Date()).toISOString(),
            data
          }
        ]);
      }
    });
    const unsubscribeSuccess = subscribe("payment:transaction:success", (data) => {
      if (data.orderId && data.orderId === currentOrderId) {
        setPaymentStatus((prev) => [
          ...prev,
          {
            type: "payment",
            status: "success",
            message: "Payment completed successfully!",
            timestamp: (/* @__PURE__ */ new Date()).toISOString(),
            data
          }
        ]);
        if (onChangeValue) {
          onChangeValue(fieldName, true);
        }
        setIsProcessing(false);
        zt.success("Payment completed successfully!");
      }
    });
    const unsubscribeFailed = subscribe("payment:transaction:failed", (data) => {
      if (data.orderId && data.orderId === currentOrderId) {
        setPaymentStatus((prev) => [
          ...prev,
          {
            type: "payment",
            status: "failed",
            message: data.message || "Payment failed",
            timestamp: (/* @__PURE__ */ new Date()).toISOString(),
            data
          }
        ]);
        setIsProcessing(false);
        zt.error(data.message || "Payment failed. Please try again.");
      }
    });
    return () => {
      unsubscribeCalc();
      unsubscribeOrder();
      unsubscribeTrans();
      unsubscribeSuccess();
      unsubscribeFailed();
    };
  }, [subscribe, currentOrderId, onChangeValue, fieldName, isProcessing]);
  const createOrderData = () => {
    try {
      let competitionItems = competitions?.filter((x) => selectedCompetitions?.includes(x.CompetitionStructureId)) || [];
      let jsonSettings = {};
      try {
        jsonSettings = JSON.parse(eventDetails?.JsonSettings || "{}");
      } catch (e) {
        console.warn("Failed to parse event JSON settings:", e);
      }
      let reformattedFormData = {
        ...formData
      };
      let {
        products,
        subTotal,
        discountPrice: discountAmount,
        extraPayments: extraFeesItems,
        total: totalFees2,
        feesCurrency,
        discounts,
        orders
      } = computeTotalAmount(jsonSettings, competitionItems, reformattedFormData);
      const orderPayload = {
        gateway: paymentGateway,
        // Security: Only pass userRoleId and displayed total amount
        userRoleId: formData?.userRoleId || participantsList?.[0]?.UserRoleId || null,
        teamId: formData?.teamId || participantsList?.[0]?.TeamId || null,
        displayedAmount: totalFees2 || 0,
        // Amount shown to user for verification
        currency: feesCurrency || "USD",
        eventId: eventDetails?.EVId || null,
        registrationId: participantsList?.[0]?.RegistrationId || null,
        description: `${eventDetails?.EventName || "Event"} Registration`,
        returnUrl: `${window.location.origin}/payment/return`,
        cancelUrl: `${window.location.origin}/payment/cancel`,
        timeoutUrl: `${window.location.origin}/payment/timeout`
      };
      return orderPayload;
    } catch (error2) {
      console.error("Error creating order data:", error2);
      throw new Error("Failed to prepare order data");
    }
  };
  const handlePayNowClick = async () => {
    if (disabled || readOnly) return;
    setIsProcessing(true);
    try {
      const orderPayload = createOrderData();
      console.log("Creating order with payload:", orderPayload);
      if (!orderPayload.displayedAmount || orderPayload.displayedAmount <= 0) {
        throw new Error("Invalid payment amount");
      }
      if (!orderPayload.userRoleId) {
        throw new Error("User role ID is required for secure payment processing");
      }
      const { data: response } = await post("/PaymentJson/CreateOrder", orderPayload);
      if (response.Success) {
        setCurrentOrderId(response.orderId || response.OrderNo);
        setError("");
        if (response.PaymentLink) {
          setPaymentWindowOpened(true);
          setPaymentWindowOpenedAt(/* @__PURE__ */ new Date());
          setTimeout(() => {
            window.open(response.PaymentLink, "_blank");
          }, 500);
        } else {
          throw new Error("Invalid payment response - missing payment URL or order ID");
        }
      } else {
        throw new Error(response.message || "Failed to create order, please try again or contact support.");
      }
    } catch (error2) {
      console.error("Payment failed:", error2);
      setIsProcessing(false);
      const errorMessage = error2.message || "Payment failed. Please try again.";
      setError(errorMessage);
      zt.error(errorMessage);
    }
  };
  const isPaymentCompleted = formData?.[fieldName] === true;
  const hasCompetitions = competitions && Array.isArray(competitions) && competitions.length > 0;
  const hasSelectedCompetitions = selectedCompetitions && Array.isArray(selectedCompetitions) && selectedCompetitions.length > 0;
  const competitionsAvailable = hasCompetitions && hasSelectedCompetitions;
  const buttonDisabled = disabled || readOnly || isProcessing || !competitionsAvailable && !isPlayGround || !isSupported || connectionTimeout;
  const gatewayConfig = paymentGateways.find((g) => g.name === paymentGateway);
  const isImageOnly = gatewayConfig?.imageOnly || false;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-4 mb-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "block text-sm font-semibold leading-6 text-gray-900 mb-2", children: [
      label || "Payment Gateway",
      !optional && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-500 ml-1", children: "*" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type: "checkbox",
        ...register(fieldName, { required: !optional }),
        checked: isPaymentCompleted,
        onChange: () => {
        },
        className: "hidden"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 p-4 border border-gray-300 rounded-lg bg-gray-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center mb-2 ${isImageOnly ? "justify-center" : ""}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(RenderPaymentGatewayIcon, { gateway: paymentGateway }),
      !isImageOnly && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2 font-medium text-gray-900", children: paymentGateway })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: handlePayNowClick,
          disabled: buttonDisabled,
          className: classNames(
            "inline-flex items-center justify-center gap-x-2 rounded-md px-6 py-2.5 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
            isPaymentCompleted ? "bg-green-600 text-white hover:bg-green-700 focus-visible:outline-green-600" : buttonDisabled ? "bg-gray-200 text-gray-700 cursor-not-allowed" : "bg-primary text-white hover:bg-primaryHover focus-visible:outline-primary"
          ),
          children: isProcessing ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-spin rounded-full h-4 w-4 border-b-2 border-white" }),
            "Creating Order..."
          ] }) : isPaymentCompleted ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef, { className: "h-5 w-5" }),
            "Payment Initiated"
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$1, { className: "h-5 w-5" }),
            "Pay Now",
            isConnected && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 bg-green-400 rounded-full animate-pulse", title: "Real-time updates active" })
          ] })
        }
      ),
      isPaymentCompleted && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-green-600 bg-green-50 p-2 rounded border border-green-200", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef, { className: "h-4 w-4 inline mr-1" }),
        "Order has been created and payment initiated."
      ] }),
      paymentWindowOpened && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-amber-600 bg-amber-50 p-2 rounded border border-amber-200", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$2, { className: "h-4 w-4 inline mr-1" }),
        "You have opened a payment gateway link in a new window. Please complete the transaction and come back. This button will be available again in 1 minute."
      ] }),
      !competitionsAvailable && !isPlayGround && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-amber-600 bg-amber-50 p-2 rounded border border-amber-200", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$2, { className: "h-4 w-4 inline mr-1" }),
        !hasCompetitions ? "No competitions available." : !hasSelectedCompetitions ? "No competitions selected for payment. Please select competitions first." : "No valid competitions for payment."
      ] }),
      isProcessing && paymentStatus.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-medium text-gray-700 mb-2", children: "Payment Progress:" }),
        paymentStatus.map((status, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: classNames(
              "text-sm p-2 rounded border flex items-start gap-2",
              status.status === "success" ? "bg-green-50 border-green-200 text-green-700" : status.status === "created" ? "bg-blue-50 border-blue-200 text-blue-700" : status.status === "failed" ? "bg-red-50 border-red-200 text-red-700" : "bg-gray-50 border-gray-200 text-gray-700"
            ),
            children: [
              status.status === "success" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 w-4 flex-shrink-0 mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-spin rounded-full h-4 w-4 border-b-2 border-current" }) }),
              status.status === "failed" && /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$2, { className: "h-4 w-4 flex-shrink-0 mt-0.5" }),
              status.status === "created" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 w-4 flex-shrink-0 mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-spin rounded-full h-4 w-4 border-b-2 border-current" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: status.message }),
                status.data?.details && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs mt-1 opacity-75", children: status.data.details })
              ] })
            ]
          },
          index
        ))
      ] }),
      !isSupported && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-red-600 bg-red-50 p-2 rounded border border-red-200", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$2, { className: "h-4 w-4 inline mr-1" }),
        "Your browser does not support real-time updates required for secure payments. Please update your browser or use a modern browser like Chrome, Firefox, or Edge."
      ] }),
      connectionTimeout && isSupported && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-red-600 bg-red-50 p-2 rounded border border-red-200", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$2, { className: "h-4 w-4 inline mr-1" }),
        "We can't connect to our secure payment system due to technical issues. Please try again after some time. Your data is safe and will be preserved."
      ] }),
      error && /* @__PURE__ */ jsxRuntimeExports.jsx(ValidationMessage, { message: error })
    ] })
  ] });
};
export {
  PayNowButton as default
};
