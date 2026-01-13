import { r as reactExports, j as jsxRuntimeExports, k as React, z as zt, _ as __vitePreload } from "./main-B7w5eCOl.js";
import { s as shallowEqual, w as wrapConnectorHooks, i as isRef, u as useDragDropManager, a as useIsomorphicLayoutEffect, d as registerTarget, b as useOptionalFactory, c as useCollectedProps } from "./useDragDropManager-CNvUORxj.js";
import { i as invariant } from "./index-B2qbYbUq.js";
import { v as v4 } from "./v4-BAmcqoE9.js";
function ClipboardDocumentCheckIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ reactExports.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ reactExports.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ reactExports.createElement("path", {
    fillRule: "evenodd",
    d: "M7.502 6h7.128A3.375 3.375 0 0 1 18 9.375v9.375a3 3 0 0 0 3-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 0 0-.673-.05A3 3 0 0 0 15 1.5h-1.5a3 3 0 0 0-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6ZM13.5 3A1.5 1.5 0 0 0 12 4.5h4.5A1.5 1.5 0 0 0 15 3h-1.5Z",
    clipRule: "evenodd"
  }), /* @__PURE__ */ reactExports.createElement("path", {
    fillRule: "evenodd",
    d: "M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V9.375Zm9.586 4.594a.75.75 0 0 0-1.172-.938l-2.476 3.096-.908-.907a.75.75 0 0 0-1.06 1.06l1.5 1.5a.75.75 0 0 0 1.116-.062l3-3.75Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef$1 = /* @__PURE__ */ reactExports.forwardRef(ClipboardDocumentCheckIcon);
function DocumentDuplicateIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ reactExports.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ reactExports.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ reactExports.createElement("path", {
    d: "M7.5 3.375c0-1.036.84-1.875 1.875-1.875h.375a3.75 3.75 0 0 1 3.75 3.75v1.875C13.5 8.161 14.34 9 15.375 9h1.875A3.75 3.75 0 0 1 21 12.75v3.375C21 17.16 20.16 18 19.125 18h-9.75A1.875 1.875 0 0 1 7.5 16.125V3.375Z"
  }), /* @__PURE__ */ reactExports.createElement("path", {
    d: "M15 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 17.25 7.5h-1.875A.375.375 0 0 1 15 7.125V5.25ZM4.875 6H6v10.125A3.375 3.375 0 0 0 9.375 19.5H16.5v1.125c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V7.875C3 6.839 3.84 6 4.875 6Z"
  }));
}
const ForwardRef = /* @__PURE__ */ reactExports.forwardRef(DocumentDuplicateIcon);
let isCallingCanDrop = false;
class DropTargetMonitorImpl {
  receiveHandlerId(targetId) {
    this.targetId = targetId;
  }
  getHandlerId() {
    return this.targetId;
  }
  subscribeToStateChange(listener, options) {
    return this.internalMonitor.subscribeToStateChange(listener, options);
  }
  canDrop() {
    if (!this.targetId) {
      return false;
    }
    invariant(!isCallingCanDrop, "You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor");
    try {
      isCallingCanDrop = true;
      return this.internalMonitor.canDropOnTarget(this.targetId);
    } finally {
      isCallingCanDrop = false;
    }
  }
  isOver(options) {
    if (!this.targetId) {
      return false;
    }
    return this.internalMonitor.isOverTarget(this.targetId, options);
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
    this.targetId = null;
    this.internalMonitor = manager.getMonitor();
  }
}
class TargetConnector {
  get connectTarget() {
    return this.dropTarget;
  }
  reconnect() {
    const didChange = this.didHandlerIdChange() || this.didDropTargetChange() || this.didOptionsChange();
    if (didChange) {
      this.disconnectDropTarget();
    }
    const dropTarget = this.dropTarget;
    if (!this.handlerId) {
      return;
    }
    if (!dropTarget) {
      this.lastConnectedDropTarget = dropTarget;
      return;
    }
    if (didChange) {
      this.lastConnectedHandlerId = this.handlerId;
      this.lastConnectedDropTarget = dropTarget;
      this.lastConnectedDropTargetOptions = this.dropTargetOptions;
      this.unsubscribeDropTarget = this.backend.connectDropTarget(this.handlerId, dropTarget, this.dropTargetOptions);
    }
  }
  receiveHandlerId(newHandlerId) {
    if (newHandlerId === this.handlerId) {
      return;
    }
    this.handlerId = newHandlerId;
    this.reconnect();
  }
  get dropTargetOptions() {
    return this.dropTargetOptionsInternal;
  }
  set dropTargetOptions(options) {
    this.dropTargetOptionsInternal = options;
  }
  didHandlerIdChange() {
    return this.lastConnectedHandlerId !== this.handlerId;
  }
  didDropTargetChange() {
    return this.lastConnectedDropTarget !== this.dropTarget;
  }
  didOptionsChange() {
    return !shallowEqual(this.lastConnectedDropTargetOptions, this.dropTargetOptions);
  }
  disconnectDropTarget() {
    if (this.unsubscribeDropTarget) {
      this.unsubscribeDropTarget();
      this.unsubscribeDropTarget = void 0;
    }
  }
  get dropTarget() {
    return this.dropTargetNode || this.dropTargetRef && this.dropTargetRef.current;
  }
  clearDropTarget() {
    this.dropTargetRef = null;
    this.dropTargetNode = null;
  }
  constructor(backend) {
    this.hooks = wrapConnectorHooks({
      dropTarget: (node, options) => {
        this.clearDropTarget();
        this.dropTargetOptions = options;
        if (isRef(node)) {
          this.dropTargetRef = node;
        } else {
          this.dropTargetNode = node;
        }
        this.reconnect();
      }
    });
    this.handlerId = null;
    this.dropTargetRef = null;
    this.dropTargetOptionsInternal = null;
    this.lastConnectedHandlerId = null;
    this.lastConnectedDropTarget = null;
    this.lastConnectedDropTargetOptions = null;
    this.backend = backend;
  }
}
function useConnectDropTarget(connector) {
  return reactExports.useMemo(
    () => connector.hooks.dropTarget(),
    [
      connector
    ]
  );
}
function useDropTargetConnector(options) {
  const manager = useDragDropManager();
  const connector = reactExports.useMemo(
    () => new TargetConnector(manager.getBackend()),
    [
      manager
    ]
  );
  useIsomorphicLayoutEffect(() => {
    connector.dropTargetOptions = options || null;
    connector.reconnect();
    return () => connector.disconnectDropTarget();
  }, [
    options
  ]);
  return connector;
}
function useDropTargetMonitor() {
  const manager = useDragDropManager();
  return reactExports.useMemo(
    () => new DropTargetMonitorImpl(manager),
    [
      manager
    ]
  );
}
function useAccept(spec) {
  const { accept } = spec;
  return reactExports.useMemo(() => {
    invariant(spec.accept != null, "accept must be defined");
    return Array.isArray(accept) ? accept : [
      accept
    ];
  }, [
    accept
  ]);
}
class DropTargetImpl {
  canDrop() {
    const spec = this.spec;
    const monitor = this.monitor;
    return spec.canDrop ? spec.canDrop(monitor.getItem(), monitor) : true;
  }
  hover() {
    const spec = this.spec;
    const monitor = this.monitor;
    if (spec.hover) {
      spec.hover(monitor.getItem(), monitor);
    }
  }
  drop() {
    const spec = this.spec;
    const monitor = this.monitor;
    if (spec.drop) {
      return spec.drop(monitor.getItem(), monitor);
    }
    return;
  }
  constructor(spec, monitor) {
    this.spec = spec;
    this.monitor = monitor;
  }
}
function useDropTarget(spec, monitor) {
  const dropTarget = reactExports.useMemo(
    () => new DropTargetImpl(spec, monitor),
    [
      monitor
    ]
  );
  reactExports.useEffect(() => {
    dropTarget.spec = spec;
  }, [
    spec
  ]);
  return dropTarget;
}
function useRegisteredDropTarget(spec, monitor, connector) {
  const manager = useDragDropManager();
  const dropTarget = useDropTarget(spec, monitor);
  const accept = useAccept(spec);
  useIsomorphicLayoutEffect(function registerDropTarget() {
    const [handlerId, unregister] = registerTarget(accept, dropTarget, manager);
    monitor.receiveHandlerId(handlerId);
    connector.receiveHandlerId(handlerId);
    return unregister;
  }, [
    manager,
    monitor,
    dropTarget,
    connector,
    accept.map(
      (a) => a.toString()
    ).join("|")
  ]);
}
function useDrop(specArg, deps) {
  const spec = useOptionalFactory(specArg);
  const monitor = useDropTargetMonitor();
  const connector = useDropTargetConnector(spec.options);
  useRegisteredDropTarget(spec, monitor, connector);
  return [
    useCollectedProps(spec.collect, monitor, connector),
    useConnectDropTarget(connector)
  ];
}
const FormSubmission = React.lazy(() => __vitePreload(() => import("./formSubmission-JNwzFgva.js"), true ? [] : void 0));
const Sidebar = React.lazy(() => __vitePreload(() => import("./sidebar-BTpUDWO3.js"), true ? [] : void 0));
const FormBuilder = ({ existingComponents, eventDetails, onChange, firstComponentId, currentActiveStep }) => {
  const [components, setComponentsState] = reactExports.useState([]);
  const [selectedComponent, setSelectedComponent] = reactExports.useState(null);
  reactExports.useEffect(() => {
    if (existingComponents?.length) {
      setComponentsState(existingComponents);
    } else {
      setComponentsState([]);
    }
  }, [firstComponentId]);
  const [{ isOver }, drop] = useDrop({
    accept: "FORM_ITEM",
    drop: (item) => addComponent(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver()
    })
  });
  const setComponents = (components2) => {
    setComponentsState(components2);
    onChange(components2);
  };
  const addComponent = (item) => {
    let label = item.label + " " + components.length;
    let name = item.label.toLowerCase().replace(/ /g, "_") + "_" + components.length;
    switch (item.label) {
      case "Registration Id": {
        name = "RegistrationId";
        break;
      }
      case "Organization/Unit Selection": {
        name = "Organizations";
        break;
      }
    }
    const newComponent = { ...item, id: v4(), label, name, class: "", options: [], conditions: [], validate: {} };
    newComponent.index = components.length + 1;
    let updatedComponents = [...components, newComponent];
    setComponents(updatedComponents);
    setSelectedComponent(newComponent);
  };
  const removeComponent = (id) => {
    let updatedComponents = components.filter((comp) => comp.id !== id);
    updatedComponents.forEach((comp, index) => {
      comp.index = index + 1;
    });
    setComponents(updatedComponents);
  };
  const handlePropertiesChange = (updatedComponent) => {
    let updatedComponents = components.map((comp) => comp.id === updatedComponent.id ? updatedComponent : comp);
    let orderedComponents = updatedComponents.sort((a, b) => a.index - b.index);
    orderedComponents.forEach((comp, index) => {
      comp.index = index + 1;
    });
    setComponents(orderedComponents);
  };
  let copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };
  let importComponents = (text) => {
    let components2 = JSON.parse(text);
    setComponents(components2);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col grow", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gray-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 ", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative lg:row-span-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-px rounded-lg bg-white lg:rounded-l-[1rem]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.md)+1px)] lg:rounded-l-[calc(1rem+1px)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sidebar, { currentActiveStep }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[1rem]" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative grow flex-1 mr-[290px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-px rounded-lg bg-white max-lg:rounded-t-[1rem]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex h-full flex-col  rounded-[calc(theme(borderRadius.md)+1px)] max-lg:rounded-t-[calc(1rem+1px)]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col md:flex-row bg-gray-50 rounded-md p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex space-x-1 justify-end", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              className: "bg-violet-950 rounded-md hover:bg-darkprimary text-white text-xs font-medium justify-items-center items-center py-2 px-4 flex space-x-1",
              onClick: () => {
                copyToClipboard(JSON.stringify(components));
                zt.success("Form copied to clipboard");
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef, { className: "h-5 w-5" }),
                " Copy"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              className: "bg-blue-900 rounded-md hover:bg-darkprimary text-white text-xs font-medium justify-items-center items-center py-2 px-4 flex space-x-1",
              onClick: () => {
                navigator.clipboard.readText().then((clipText) => {
                  importComponents(clipText);
                });
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$1, { className: "h-5 w-5" }),
                " Paste"
              ]
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          FormSubmission,
          {
            eventDetails,
            isPlayGround: true,
            drop,
            isOver,
            components,
            removeComponent,
            handlePropertiesPanelChange: handlePropertiesChange,
            setComponents,
            selectedComponent,
            setSelectedComponent
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[1rem]" })
    ] })
  ] }) }) }) });
};
export {
  FormBuilder as default
};
