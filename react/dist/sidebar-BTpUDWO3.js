import { r as reactExports, j as jsxRuntimeExports } from "./main-B7w5eCOl.js";
import { i as invariant } from "./index-B2qbYbUq.js";
import { s as shallowEqual, w as wrapConnectorHooks, i as isRef, u as useDragDropManager, a as useIsomorphicLayoutEffect, r as registerSource, b as useOptionalFactory, c as useCollectedProps } from "./useDragDropManager-CNvUORxj.js";
function useConnectDragSource(connector) {
  return reactExports.useMemo(
    () => connector.hooks.dragSource(),
    [
      connector
    ]
  );
}
function useConnectDragPreview(connector) {
  return reactExports.useMemo(
    () => connector.hooks.dragPreview(),
    [
      connector
    ]
  );
}
let isCallingCanDrag = false;
let isCallingIsDragging = false;
class DragSourceMonitorImpl {
  receiveHandlerId(sourceId) {
    this.sourceId = sourceId;
  }
  getHandlerId() {
    return this.sourceId;
  }
  canDrag() {
    invariant(!isCallingCanDrag, "You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
    try {
      isCallingCanDrag = true;
      return this.internalMonitor.canDragSource(this.sourceId);
    } finally {
      isCallingCanDrag = false;
    }
  }
  isDragging() {
    if (!this.sourceId) {
      return false;
    }
    invariant(!isCallingIsDragging, "You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
    try {
      isCallingIsDragging = true;
      return this.internalMonitor.isDraggingSource(this.sourceId);
    } finally {
      isCallingIsDragging = false;
    }
  }
  subscribeToStateChange(listener, options) {
    return this.internalMonitor.subscribeToStateChange(listener, options);
  }
  isDraggingSource(sourceId) {
    return this.internalMonitor.isDraggingSource(sourceId);
  }
  isOverTarget(targetId, options) {
    return this.internalMonitor.isOverTarget(targetId, options);
  }
  getTargetIds() {
    return this.internalMonitor.getTargetIds();
  }
  isSourcePublic() {
    return this.internalMonitor.isSourcePublic();
  }
  getSourceId() {
    return this.internalMonitor.getSourceId();
  }
  subscribeToOffsetChange(listener) {
    return this.internalMonitor.subscribeToOffsetChange(listener);
  }
  canDragSource(sourceId) {
    return this.internalMonitor.canDragSource(sourceId);
  }
  canDropOnTarget(targetId) {
    return this.internalMonitor.canDropOnTarget(targetId);
  }
  getItemType() {
    return this.internalMonitor.getItemType();
  }
  getItem() {
    return this.internalMonitor.getItem();
  }
  getDropResult() {
    return this.internalMonitor.getDropResult();
  }
  didDrop() {
    return this.internalMonitor.didDrop();
  }
  getInitialClientOffset() {
    return this.internalMonitor.getInitialClientOffset();
  }
  getInitialSourceClientOffset() {
    return this.internalMonitor.getInitialSourceClientOffset();
  }
  getSourceClientOffset() {
    return this.internalMonitor.getSourceClientOffset();
  }
  getClientOffset() {
    return this.internalMonitor.getClientOffset();
  }
  getDifferenceFromInitialOffset() {
    return this.internalMonitor.getDifferenceFromInitialOffset();
  }
  constructor(manager) {
    this.sourceId = null;
    this.internalMonitor = manager.getMonitor();
  }
}
class SourceConnector {
  receiveHandlerId(newHandlerId) {
    if (this.handlerId === newHandlerId) {
      return;
    }
    this.handlerId = newHandlerId;
    this.reconnect();
  }
  get connectTarget() {
    return this.dragSource;
  }
  get dragSourceOptions() {
    return this.dragSourceOptionsInternal;
  }
  set dragSourceOptions(options) {
    this.dragSourceOptionsInternal = options;
  }
  get dragPreviewOptions() {
    return this.dragPreviewOptionsInternal;
  }
  set dragPreviewOptions(options) {
    this.dragPreviewOptionsInternal = options;
  }
  reconnect() {
    const didChange = this.reconnectDragSource();
    this.reconnectDragPreview(didChange);
  }
  reconnectDragSource() {
    const dragSource = this.dragSource;
    const didChange = this.didHandlerIdChange() || this.didConnectedDragSourceChange() || this.didDragSourceOptionsChange();
    if (didChange) {
      this.disconnectDragSource();
    }
    if (!this.handlerId) {
      return didChange;
    }
    if (!dragSource) {
      this.lastConnectedDragSource = dragSource;
      return didChange;
    }
    if (didChange) {
      this.lastConnectedHandlerId = this.handlerId;
      this.lastConnectedDragSource = dragSource;
      this.lastConnectedDragSourceOptions = this.dragSourceOptions;
      this.dragSourceUnsubscribe = this.backend.connectDragSource(this.handlerId, dragSource, this.dragSourceOptions);
    }
    return didChange;
  }
  reconnectDragPreview(forceDidChange = false) {
    const dragPreview = this.dragPreview;
    const didChange = forceDidChange || this.didHandlerIdChange() || this.didConnectedDragPreviewChange() || this.didDragPreviewOptionsChange();
    if (didChange) {
      this.disconnectDragPreview();
    }
    if (!this.handlerId) {
      return;
    }
    if (!dragPreview) {
      this.lastConnectedDragPreview = dragPreview;
      return;
    }
    if (didChange) {
      this.lastConnectedHandlerId = this.handlerId;
      this.lastConnectedDragPreview = dragPreview;
      this.lastConnectedDragPreviewOptions = this.dragPreviewOptions;
      this.dragPreviewUnsubscribe = this.backend.connectDragPreview(this.handlerId, dragPreview, this.dragPreviewOptions);
    }
  }
  didHandlerIdChange() {
    return this.lastConnectedHandlerId !== this.handlerId;
  }
  didConnectedDragSourceChange() {
    return this.lastConnectedDragSource !== this.dragSource;
  }
  didConnectedDragPreviewChange() {
    return this.lastConnectedDragPreview !== this.dragPreview;
  }
  didDragSourceOptionsChange() {
    return !shallowEqual(this.lastConnectedDragSourceOptions, this.dragSourceOptions);
  }
  didDragPreviewOptionsChange() {
    return !shallowEqual(this.lastConnectedDragPreviewOptions, this.dragPreviewOptions);
  }
  disconnectDragSource() {
    if (this.dragSourceUnsubscribe) {
      this.dragSourceUnsubscribe();
      this.dragSourceUnsubscribe = void 0;
    }
  }
  disconnectDragPreview() {
    if (this.dragPreviewUnsubscribe) {
      this.dragPreviewUnsubscribe();
      this.dragPreviewUnsubscribe = void 0;
      this.dragPreviewNode = null;
      this.dragPreviewRef = null;
    }
  }
  get dragSource() {
    return this.dragSourceNode || this.dragSourceRef && this.dragSourceRef.current;
  }
  get dragPreview() {
    return this.dragPreviewNode || this.dragPreviewRef && this.dragPreviewRef.current;
  }
  clearDragSource() {
    this.dragSourceNode = null;
    this.dragSourceRef = null;
  }
  clearDragPreview() {
    this.dragPreviewNode = null;
    this.dragPreviewRef = null;
  }
  constructor(backend) {
    this.hooks = wrapConnectorHooks({
      dragSource: (node, options) => {
        this.clearDragSource();
        this.dragSourceOptions = options || null;
        if (isRef(node)) {
          this.dragSourceRef = node;
        } else {
          this.dragSourceNode = node;
        }
        this.reconnectDragSource();
      },
      dragPreview: (node, options) => {
        this.clearDragPreview();
        this.dragPreviewOptions = options || null;
        if (isRef(node)) {
          this.dragPreviewRef = node;
        } else {
          this.dragPreviewNode = node;
        }
        this.reconnectDragPreview();
      }
    });
    this.handlerId = null;
    this.dragSourceRef = null;
    this.dragSourceOptionsInternal = null;
    this.dragPreviewRef = null;
    this.dragPreviewOptionsInternal = null;
    this.lastConnectedHandlerId = null;
    this.lastConnectedDragSource = null;
    this.lastConnectedDragSourceOptions = null;
    this.lastConnectedDragPreview = null;
    this.lastConnectedDragPreviewOptions = null;
    this.backend = backend;
  }
}
function useDragSourceConnector(dragSourceOptions, dragPreviewOptions) {
  const manager = useDragDropManager();
  const connector = reactExports.useMemo(
    () => new SourceConnector(manager.getBackend()),
    [
      manager
    ]
  );
  useIsomorphicLayoutEffect(() => {
    connector.dragSourceOptions = dragSourceOptions || null;
    connector.reconnect();
    return () => connector.disconnectDragSource();
  }, [
    connector,
    dragSourceOptions
  ]);
  useIsomorphicLayoutEffect(() => {
    connector.dragPreviewOptions = dragPreviewOptions || null;
    connector.reconnect();
    return () => connector.disconnectDragPreview();
  }, [
    connector,
    dragPreviewOptions
  ]);
  return connector;
}
function useDragSourceMonitor() {
  const manager = useDragDropManager();
  return reactExports.useMemo(
    () => new DragSourceMonitorImpl(manager),
    [
      manager
    ]
  );
}
class DragSourceImpl {
  beginDrag() {
    const spec = this.spec;
    const monitor = this.monitor;
    let result = null;
    if (typeof spec.item === "object") {
      result = spec.item;
    } else if (typeof spec.item === "function") {
      result = spec.item(monitor);
    } else {
      result = {};
    }
    return result !== null && result !== void 0 ? result : null;
  }
  canDrag() {
    const spec = this.spec;
    const monitor = this.monitor;
    if (typeof spec.canDrag === "boolean") {
      return spec.canDrag;
    } else if (typeof spec.canDrag === "function") {
      return spec.canDrag(monitor);
    } else {
      return true;
    }
  }
  isDragging(globalMonitor, target) {
    const spec = this.spec;
    const monitor = this.monitor;
    const { isDragging } = spec;
    return isDragging ? isDragging(monitor) : target === globalMonitor.getSourceId();
  }
  endDrag() {
    const spec = this.spec;
    const monitor = this.monitor;
    const connector = this.connector;
    const { end } = spec;
    if (end) {
      end(monitor.getItem(), monitor);
    }
    connector.reconnect();
  }
  constructor(spec, monitor, connector) {
    this.spec = spec;
    this.monitor = monitor;
    this.connector = connector;
  }
}
function useDragSource(spec, monitor, connector) {
  const handler = reactExports.useMemo(
    () => new DragSourceImpl(spec, monitor, connector),
    [
      monitor,
      connector
    ]
  );
  reactExports.useEffect(() => {
    handler.spec = spec;
  }, [
    spec
  ]);
  return handler;
}
function useDragType(spec) {
  return reactExports.useMemo(() => {
    const result = spec.type;
    invariant(result != null, "spec.type must be defined");
    return result;
  }, [
    spec
  ]);
}
function useRegisteredDragSource(spec, monitor, connector) {
  const manager = useDragDropManager();
  const handler = useDragSource(spec, monitor, connector);
  const itemType = useDragType(spec);
  useIsomorphicLayoutEffect(function registerDragSource() {
    if (itemType != null) {
      const [handlerId, unregister] = registerSource(itemType, handler, manager);
      monitor.receiveHandlerId(handlerId);
      connector.receiveHandlerId(handlerId);
      return unregister;
    }
    return;
  }, [
    manager,
    monitor,
    connector,
    handler,
    itemType
  ]);
}
function useDrag(specArg, deps) {
  const spec = useOptionalFactory(specArg);
  invariant(!spec.begin, `useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)`);
  const monitor = useDragSourceMonitor();
  const connector = useDragSourceConnector(spec.options, spec.previewOptions);
  useRegisteredDragSource(spec, monitor, connector);
  return [
    useCollectedProps(spec.collect, monitor, connector),
    useConnectDragSource(connector),
    useConnectDragPreview(connector)
  ];
}
const FormItem = ({ type, label, iconClass }) => {
  const [{ isDragging }, drag] = useDrag({
    type: "FORM_ITEM",
    item: { type, label },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref: drag,
      className: `group relative block  rounded-lg border border-gray-300 bg-white px-6 py-2 shadow-sm focus:outline-none data-[focus]:border-indigo-600 data-[focus]:ring-2 data-[focus]:ring-indigo-600 sm:flex p-4 cursor-move mb-2  ${isDragging ? "opacity-50" : "opacity-100"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: " material-symbols-outlined h-6 w-6 mr-2 text-red", children: iconClass }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex flex-col text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-gray-900", children: label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-500" })
        ] }) })
      ]
    }
  );
};
const formItems = [
  {
    type: "text",
    label: "Text Field",
    icon: "edit",
    allowedPages: ["Guardian Registration", "User", "Participations", "Team", "Team Member Profile", "Payment"],
    isInput: true,
    features: ["inputValidations", "labelOrText", "editable", "uniqueCheck"]
  },
  {
    type: "password",
    label: "Password",
    icon: "key",
    allowedPages: ["User", "Participations", "Team Member Profile", "Payment"],
    isInput: true,
    features: ["inputValidations", "labelOrText", "editable", "uniqueCheck"]
  },
  {
    type: "email",
    label: "Email",
    icon: "email",
    allowedPages: ["Guardian Registration", "User", "Participations", "Team", "Team Member Profile", "Payment"],
    isInput: true,
    features: ["inputValidations", "email", "editable", "uniqueCheck", "emailVerification"]
  },
  {
    type: "phone",
    label: "Phone",
    icon: "phone",
    allowedPages: ["Guardian Registration", "User", "Participations", "Team", "Team Member Profile", "Payment"],
    isInput: true,
    features: ["inputValidations", "phoneNumber", "editable", "uniqueCheck"]
  },
  {
    type: "number",
    label: "Number",
    icon: "looks_one",
    allowedPages: ["Guardian Registration", "User", "Participations", "Team", "Team Member Profile", "Payment"],
    isInput: true,
    features: ["inputValidations", "labelOrText", "editable", "uniqueCheck"]
  },
  {
    type: "textarea",
    label: "Textarea",
    icon: "text_snippet",
    allowedPages: ["Guardian Registration", "User", "Participations", "Team Member Profile", "Payment"],
    isInput: true,
    features: ["inputValidations", "labelOrText", "editable", "uniqueCheck"]
  },
  {
    type: "select",
    label: "Select",
    icon: "dropdown",
    allowedPages: ["Guardian Registration", "User", "Participations", "Team", "Team Member Profile", "Payment"],
    isInput: true,
    features: ["inputValidations", "labelOrText", "editable", "uniqueCheck", "includeOptions"]
  },
  {
    type: "date",
    label: "Date",
    icon: "date_range",
    allowedPages: ["User", "Participations", "Team Member Profile", "Payment"],
    isInput: true,
    features: ["inputValidations", "labelOrText", "editable", "uniqueCheck"]
  },
  {
    type: "checkbox",
    label: "Checkbox",
    icon: "check_box",
    allowedPages: ["Agreement", "User", "Participations", "Team Member Profile", "Payment"],
    isInput: true,
    features: ["inputValidations", "labelOrText", "editable", "uniqueCheck"]
  },
  {
    type: "radio",
    label: "Radio",
    icon: "radio_button_checked",
    allowedPages: ["User", "Participations", "Team Member Profile", "Payment"],
    isInput: true,
    features: ["inputValidations", "labelOrText", "editable", "uniqueCheck"]
  },
  {
    type: "country",
    label: "Country",
    icon: "flag_2",
    allowedPages: ["User", "Participations", "Team Member Profile", "Payment"],
    isInput: true,
    features: ["inputValidations", "labelOrText", "editable", "uniqueCheck"]
  },
  { type: "RegistrationIdBox", label: "Registration Id", icon: "edit", allowedPages: ["User"], isInput: true, features: ["inputValidations", "registrationIdBox", "editable", "uniqueCheck"] },
  {
    type: "organizations",
    label: "Organization/Unit Selection",
    icon: "business",
    allowedPages: ["User", "Team", "Participations"],
    isInput: true,
    features: ["inputValidations", "labelOrText", "editable", "uniqueCheck"]
  },
  { type: "group", label: "Group", icon: "folder", allowedPages: ["Participations"], isInput: true, features: ["inputValidations", "labelOrText", "editable", "uniqueCheck"] },
  { type: "competitions", label: "Competitions", icon: "trophy", allowedPages: ["Participations"], isInput: true, features: ["inputValidations", "labelOrText", "editable", "uniqueCheck"] },
  { type: "team-members", label: "Team Members", icon: "people", allowedPages: ["Team Members"], features: ["labelOrText"] },
  { type: "payment-summary", label: "Payment Summary", icon: "payment", allowedPages: ["Payment"], features: ["labelOrText"] },
  { type: "non-payment-summary", label: "Participation Summary", icon: "payment", allowedPages: ["Payment"], features: ["labelOrText"] },
  { type: "extra-payment-options", label: "Extra Payment Options", icon: "payment", allowedPages: ["Payment"], features: ["labelOrText", "includeOptions"] },
  { type: "payment-button", label: "Payment Button", icon: "payment", allowedPages: ["Payment"], features: ["url"] },
  { type: "custom-payment-amount", label: "Custom Payment Amount", icon: "payment", allowedPages: ["Payment"], features: ["paymentAmount"] },
  { type: "payment-methods", label: "Payment Methods", icon: "credit_card", allowedPages: ["Payment"], isInput: true, features: ["inputValidations", "labelOrText", "editable", "includeOptions"] },
  { type: "pay-now-button", label: "Pay Now Button", icon: "payment", allowedPages: ["Payment"], isInput: true, features: ["inputValidations", "labelOrText", "editable", "paymentGatewayConfig"] },
  {
    type: "heading",
    label: "Heading",
    icon: "title",
    allowedPages: [
      "Agreement",
      "User",
      "Participations",
      "Team Member Profile",
      "Payment",
      "Mail Footer Content",
      "Public Page Left Sidebar",
      "Public Page Footer",
      "Public Page Main View",
      "Public Page Contact View",
      "Public Event View Header",
      "Public Event View Center",
      "Public Event View Footer"
    ],
    features: ["labelOrText"]
  },
  {
    type: "imageFromUrl",
    label: "Image From Url",
    icon: "image",
    allowedPages: [
      "Agreement",
      "User",
      "Participations",
      "Team Member Profile",
      "Payment",
      "Mail Footer Content",
      "Public Page Left Sidebar",
      "Public Page Footer",
      "Public Page Main View",
      "Public Page Contact View",
      "Public Event View Header",
      "Public Event View Center",
      "Public Event View Footer"
    ],
    features: ["imageFromUrl"]
  },
  {
    type: "iframeRenderer",
    label: "Iframe Renderer",
    icon: "code",
    allowedPages: [
      "User",
      "Agreement",
      "Participations",
      "Team Member Profile",
      "Payment",
      "Public Page Left Sidebar",
      "Public Page Footer",
      "Public Page Main View",
      "Public Page Contact View",
      "Public Event View Header",
      "Public Event View Center",
      "Public Event View Footer"
    ],
    features: ["url"]
  },
  {
    type: "html",
    label: "HTML",
    icon: "code",
    allowedPages: [
      "User",
      "Agreement",
      "Participations",
      "Team Member Profile",
      "Payment",
      "Mail Footer Content",
      "Public Page Left Sidebar",
      "Public Page Footer",
      "Public Page Main View",
      "Public Page Contact View",
      "Public Event View Header",
      "Public Event View Center",
      "Public Event View Footer"
    ],
    features: ["html"]
  },
  {
    type: "paragraph",
    label: "Paragraph",
    icon: "text_fields",
    allowedPages: [
      "Agreement",
      "User",
      "Participations",
      "Team Member Profile",
      "Payment",
      "Mail Footer Content",
      "Public Page Left Sidebar",
      "Public Page Footer",
      "Public Page Main View",
      "Public Page Contact View",
      "Public Event View Header",
      "Public Event View Center",
      "Public Event View Footer"
    ],
    features: ["labelOrText"]
  },
  { type: "image-upload", label: "Image Upload", icon: "image", allowedPages: ["User", "Participations", "Team Member Profile", "Payment"], features: ["labelOrText", "inputValidations"] },
  { type: "file-upload", label: "File Upload", icon: "upload", allowedPages: ["User", "Participations", "Team Member Profile", "Payment"], features: ["labelOrText", "inputValidations"] },
  // public page contents from event details
  {
    type: "event-name",
    label: "Event Name",
    icon: "event",
    allowedPages: [
      "Public Page Left Sidebar",
      "Public Page Footer",
      "Public Page Main View",
      "Public Page Contact View",
      "Public Event View Header",
      "Public Event View Center",
      "Public Event View Footer"
    ],
    features: ["labelOrText"]
  },
  {
    type: "event-date",
    label: "Event Date",
    icon: "date_range",
    allowedPages: [
      "Public Page Left Sidebar",
      "Public Page Footer",
      "Public Page Main View",
      "Public Page Contact View",
      "Public Event View Header",
      "Public Event View Center",
      "Public Event View Footer"
    ],
    features: ["labelOrText"]
  },
  {
    type: "event-location",
    label: "Event Location/Venue",
    icon: "place",
    allowedPages: [
      "Public Page Left Sidebar",
      "Public Page Footer",
      "Public Page Main View",
      "Public Page Contact View",
      "Public Event View Header",
      "Public Event View Center",
      "Public Event View Footer"
    ],
    features: ["labelOrText"]
  },
  {
    type: "event-description",
    label: "Event Description",
    icon: "description",
    allowedPages: [
      "Public Page Left Sidebar",
      "Public Page Footer",
      "Public Page Main View",
      "Public Page Contact View",
      "Public Event View Header",
      "Public Event View Center",
      "Public Event View Footer"
    ],
    features: ["labelOrText"]
  },
  {
    type: "event-logo",
    label: "Event Logo",
    icon: "image",
    allowedPages: [
      "Public Page Left Sidebar",
      "Public Page Footer",
      "Public Page Main View",
      "Public Page Contact View",
      "Public Event View Header",
      "Public Event View Center",
      "Public Event View Footer"
    ],
    features: ["labelOrText"]
  },
  {
    type: "event-registration-login-buttons",
    label: "Event Registration Login Buttons",
    icon: "login",
    allowedPages: ["Public Page Left Sidebar", "Public Page Footer", "Public Page Main View"],
    features: ["labelOrText"]
  },
  {
    type: "event-banner",
    label: "Event Banner",
    icon: "image",
    allowedPages: ["Public Page Main View"],
    features: ["labelOrText"]
  },
  {
    type: "organization-name",
    label: "Organization Name",
    icon: "business",
    allowedPages: [
      "Public Page Left Sidebar",
      "Public Page Footer",
      "Public Page Main View",
      "Public Page Contact View",
      "Public Event View Header",
      "Public Event View Center",
      "Public Event View Footer"
    ],
    features: ["labelOrText"]
  },
  {
    type: "organization-logo",
    label: "Organization Logo",
    icon: "image",
    allowedPages: [
      "Public Page Left Sidebar",
      "Public Page Footer",
      "Public Page Main View",
      "Public Page Contact View",
      "Public Event View Header",
      "Public Event View Center",
      "Public Event View Footer"
    ],
    features: ["labelOrText"]
  },
  //competition form related things
  {
    type: "competitions-list",
    label: "Competitions List",
    icon: "list",
    allowedPages: ["Public Page Main View"],
    features: ["labelOrText"]
  },
  {
    type: "required-information-to-finish-registration",
    label: "Required Information To Finish Registration",
    icon: "info",
    allowedPages: ["Public Page Main View"],
    features: ["labelOrText"]
  },
  // static contact information
  {
    type: "contact-organization",
    label: "Contact Organization",
    icon: "business",
    allowedPages: ["Public Page Contact View"],
    features: ["text"]
  },
  {
    type: "contact-email",
    label: "Contact Email",
    icon: "email",
    allowedPages: ["Public Page Contact View"],
    features: ["email"]
  },
  {
    type: "contact-phone",
    label: "Contact Phone",
    icon: "phone",
    allowedPages: ["Public Page Contact View"],
    features: ["phoneNumber"]
  },
  {
    type: "contact-whatsapp",
    label: "Contact WhatsApp",
    icon: "phone",
    allowedPages: ["Public Page Contact View"],
    features: ["phoneNumber"]
  },
  {
    type: "contact-facebook",
    label: "Facebook Link",
    icon: "tag",
    allowedPages: ["Public Page Contact View"],
    features: ["url"]
  },
  {
    type: "contact-instagram",
    label: "Instagram Link",
    icon: "photo_camera",
    allowedPages: ["Public Page Contact View"],
    features: ["url"]
  },
  // Live Event Status Components
  {
    type: "event-competition-count",
    label: "Competition Count Status",
    icon: "analytics",
    allowedPages: ["Public Event View Center"],
    features: ["labelOrText"]
  },
  {
    type: "event-stage-competitions",
    label: "Stage Competitions",
    icon: "list",
    allowedPages: ["Public Event View Center"],
    features: ["labelOrText"]
  },
  {
    type: "event-live-status",
    label: "Event Live Status",
    icon: "live_tv",
    allowedPages: ["Public Event View Center"],
    features: ["labelOrText"]
  },
  {
    type: "event-results-link",
    label: "Event Results Link",
    icon: "link",
    allowedPages: ["Public Event View Footer", "Public Event View Center"],
    features: ["url"]
  }
];
const Sidebar = ({ currentActiveStep }) => {
  let filteredItems = formItems.filter((item) => item.allowedPages.includes(currentActiveStep?.name));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative  w-64 ", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-px rounded-lg bg-white lg:rounded-l-lg" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex h-full flex-col  rounded-lg lg:rounded-l-[calc(2rem+1px)] px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-2 pb-4 pt-2 sm:pb-3 sm:pt-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium tracking-tight text-gray-950 max-lg:text-center", children: "Choose Components" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 max-w-lg text-xs text-gray-600 max-lg:text-center", children: "Drag and drop and build form" })
      ] }),
      filteredItems.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(FormItem, { type: item.type, label: item.label, iconClass: item.icon }, index))
    ] })
  ] });
};
export {
  Sidebar as default,
  formItems
};
