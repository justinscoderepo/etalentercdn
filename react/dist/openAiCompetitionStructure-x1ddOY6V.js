import { r as reactExports, j as jsxRuntimeExports, L as Loader, i as classNames, v as n, w as upload, p as post } from "./main-B7w5eCOl.js";
import { C as Controller, u as useForm } from "./index.esm-CiAIyUc7.js";
import { L as LayoutOuter } from "./layoutOuter-CBo2V6Zr.js";
import { P as PageHeader } from "./pageHeader-By7QqcaI.js";
import { V as ValidationMessage } from "./validationMessage-D3Gjn0ek.js";
import { F as ForwardRef$1 } from "./XMarkIcon-CWPDMTWO.js";
import { v as v4 } from "./v4-BAmcqoE9.js";
function ChevronUpDownIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ reactExports.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ reactExports.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ reactExports.createElement("path", {
    fillRule: "evenodd",
    d: "M10.53 3.47a.75.75 0 0 0-1.06 0L6.22 6.72a.75.75 0 0 0 1.06 1.06L10 5.06l2.72 2.72a.75.75 0 1 0 1.06-1.06l-3.25-3.25Zm-4.31 9.81 3.25 3.25a.75.75 0 0 0 1.06 0l3.25-3.25a.75.75 0 1 0-1.06-1.06L10 14.94l-2.72-2.72a.75.75 0 0 0-1.06 1.06Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /* @__PURE__ */ reactExports.forwardRef(ChevronUpDownIcon);
function MultiImageUpload({
  optional,
  control,
  fieldName,
  label,
  errors,
  enableCrop,
  onChangeValidation,
  viewOnly,
  aspect,
  disableRequiredsymbol,
  validVideoExtensions,
  validImageExtensions,
  validExtensions,
  rules,
  labelFont,
  fileUploadUrl,
  isImageOptimize
}) {
  let errorsForField = errors?.[fieldName];
  let [error, setError] = reactExports.useState(errorsForField);
  const [isLoading, setIsLoading] = reactExports.useState(false);
  let [files, setFiles] = reactExports.useState([]);
  reactExports.useEffect(() => {
    setError(errors?.[fieldName]);
  }, [errors?.[fieldName]]);
  function dataURLtoFile(dataURL, filename) {
    const arr = dataURL.split(",");
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n2 = bstr.length;
    const u8arr = new Uint8Array(n2);
    while (n2--) {
      u8arr[n2] = bstr.charCodeAt(n2);
    }
    return new File([u8arr], filename, { type: mime });
  }
  const uploadImages = async (formData) => {
    try {
      setIsLoading(true);
      let res = await upload(`${fileUploadUrl}`, formData);
      if (res?.data?.Results) {
        if (res.data) {
          files.push({ filePath: res.data.Results, webUrl: `${res.data.Results}` });
          setFiles(files);
          onChangeValidation(files);
        } else {
          n.error("Failed to upload");
          onChangeValidation([{ filePath: "", webUrl: "" }]);
        }
        setIsLoading(false);
      }
    } catch (error2) {
      n.error(error2?.response?.data?.message);
      onChangeValidation([{ filePath: "", webUrl: "" }]);
    }
    setIsLoading(false);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden min-h-64", children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "", children: !viewOnly && /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "my-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "label",
      {
        htmlFor: fieldName,
        className: classNames(labelFont ? labelFont : " text-sm text-center block font-medium text-gray-700 mb-1", error ? "text-danger" : "text-gray-400"),
        children: label || fieldName
      }
    ),
    rules && rules.required && !disableRequiredsymbol ? /* @__PURE__ */ jsxRuntimeExports.jsx("sup", {}) : "",
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Controller,
      {
        name: fieldName,
        control,
        rules: { required: !optional },
        render: ({ field }) => {
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: classNames(
                "flex flex-col p-10 w-full border-0 pt-4 border-b border-transparent bg-gray-100 focus:border-darkprimary focus:ring-0 sm:text-sm",
                error ? "border-danger" : "text-gray-200 border-purple-400"
              ),
              children: [
                field?.value?.length ? /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-1 w-full relative h-full  space-x-8  grow flex-row items-center rounded-lg tracking-wide overflow-x-scroll", children: field.value.map((image, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex flex-shrink-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: image.webUrl, alt: `Image ${index}`, className: "max-h-100 flex w-96 mb-3 mr-3 nonselectable", draggable: false }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0  pt-2 pr-2 block", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      className: "rounded-md bg-transparent text-shadow text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 bg-lightcharcoal p-2 bg-opacity-90",
                      onClick: () => {
                        setTimeout(() => {
                          files = files.filter((file, i) => i !== index);
                          setFiles(files);
                          onChangeValidation(files);
                        }, 100);
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Close" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$1, { className: "h-8 w-8 text-[#c5c5c5]", "aria-hidden": "true" })
                      ]
                    }
                  ) })
                ] }, index)) }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {}),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "w-100 relative h-full flex flex-col items-center rounded-lg tracking-wide cursor-pointer ", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", className: "w-8 h-8 mt-8 text-primary", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "path",
                      {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z",
                        className: "text-lightcharcoal"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { className: "text-lightcharcoal", strokeLinecap: "round", strokeLinejoin: "round", d: "M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-2 font-medium leading-normal text-primary mb-8", children: "Upload" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "file",
                      className: "hidden",
                      accept: "image/*",
                      multiple: true,
                      onChange: async (e) => {
                        setIsLoading(true);
                        const imageFiles = Array.from(e.target.files);
                        let totalFileSize = 0;
                        imageFiles.forEach((file) => {
                          totalFileSize += file.size;
                        });
                        const fileSize = totalFileSize / (1024 * 1024);
                        if (fileSize > 10) {
                          n.error("Total file size should be lesser than 10MB.");
                          setIsLoading(false);
                          return;
                        }
                        const filePromises = imageFiles.map((file) => {
                          return new Promise((resolve, reject) => {
                            const reader = new FileReader();
                            reader.onload = function(event) {
                              resolve(event.target.result);
                            };
                            reader.readAsDataURL(file);
                          });
                        });
                        Promise.all(filePromises).then((results) => {
                          results.forEach((dataURL, index) => {
                            const formData = new FormData();
                            const imageFile = imageFiles[index];
                            let targetWidth;
                            let targetHeight;
                            const img = new Image();
                            img.src = dataURL;
                            img.onload = async function() {
                              if (isImageOptimize === true) {
                                const uploadImageHeight = img.height;
                                const uploadImageWidth = img.width;
                                const canvas = document.createElement("canvas");
                                const ctx = canvas.getContext("2d");
                                if (uploadImageHeight > 300 && uploadImageWidth > 300) {
                                  if (uploadImageWidth < uploadImageHeight) {
                                    targetWidth = 300;
                                    const ratio = uploadImageWidth / targetWidth;
                                    targetHeight = uploadImageHeight / ratio;
                                  } else {
                                    targetHeight = 300;
                                    const ratio = uploadImageHeight / targetHeight;
                                    targetWidth = uploadImageWidth / ratio;
                                  }
                                } else {
                                  targetHeight = uploadImageHeight;
                                  targetWidth = uploadImageWidth;
                                }
                                canvas.width = targetWidth;
                                canvas.height = targetHeight;
                                ctx.drawImage(img, 0, 0, targetWidth, targetHeight);
                                const resizedDataURL = canvas.toDataURL("image/jpeg");
                                const resizedFile = dataURLtoFile(resizedDataURL, imageFile.name);
                                let srcUrl = URL.createObjectURL(resizedFile);
                                field.onChange([...field.value, srcUrl]);
                                formData.append("file", resizedFile);
                              } else {
                                formData.append("file", imageFile);
                              }
                              uploadImages(formData);
                            };
                          });
                        });
                        e.target.value = "";
                      }
                    }
                  )
                ] })
              ]
            }
          );
        }
      }
    ),
    error && /* @__PURE__ */ jsxRuntimeExports.jsx(ValidationMessage, { message: "This file is required" })
  ] }) }) }) }) }) });
}
const getResultFromImage = async (urls, onGetCompetitionStructure, aiPrompt) => {
  if (!urls?.length) {
    alert("Please upload an image");
    return;
  }
  try {
    const imageUrls = urls.map((url) => url.webUrl);
    const requestData = {
      imageUrls,
      aiPrompt: aiPrompt || "Generate competitions from the image."
    };
    const response = await post("/AIHelperJson/GetResultFromImage", requestData);
    if (response && response.success) {
      onGetCompetitionStructure(response.data);
    } else {
      console.error("API Error:", response?.message || "Unknown error");
      alert("Error processing image: " + (response?.message || "Unknown error"));
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Error processing image: " + (error.message || "Network error"));
  }
};
const TinyTable = ({ heading, items, isLoading, columns }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: items?.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-2 sm:px-4 lg:px-6 relative", children: [
    isLoading && /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sm:flex sm:items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-sm font-semibold leading-6 text-onSurface", children: heading }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flow-root", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "-mx-2 -my-1 overflow-x-auto sm:-mx-4 lg:-mx-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-block min-w-full py-1 align-middle sm:px-4 lg:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "min-w-full divide-y divide-gray-300", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-surfaceCard", children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: columns.map((column) => /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", className: "py-2 pl-2 pr-1 text-left text-xs font-semibold text-onSurface sm:pl-4", children: column.label }, column.field)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border bg-contentBgOuter", children: items?.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "divide-x divide-gray-200", children: columns.map((column) => /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "whitespace-nowrap px-1 py-2 text-xs text-onSurfaceVariant", children: item[column.field] }, column.field)) }, item.GroupName)) })
    ] }) }) }) }) })
  ] }) });
};
function OpenAiCompetitionStructure() {
  const [aiPrompt, setAiPrompt] = reactExports.useState(localStorage.getItem("aiPrompt") || "");
  const [competitions, setCompetitions] = reactExports.useState([]);
  const [selectAll, setSelectAll] = reactExports.useState(false);
  const [isLoading, setIsLoading] = reactExports.useState(false);
  const [selectedCheckboxes, setSelectedCheckboxes] = reactExports.useState([]);
  const {
    control,
    getValues,
    setValue,
    formState: { errors }
  } = useForm();
  let formData = getValues();
  reactExports.useEffect(() => {
    let competitionsGroups = sessionStorage.getItem("competitionsGroups");
    if (competitionsGroups) {
      setCompetitions(JSON.parse(competitionsGroups));
    }
    let image = sessionStorage.getItem("images");
    if (image) {
      setValue("fileUploads", JSON.parse(image));
    }
    let selectedCheckboxes2 = sessionStorage.getItem("selectedCheckboxes");
    if (selectedCheckboxes2) {
      setSelectedCheckboxes(JSON.parse(selectedCheckboxes2));
    }
  }, []);
  const onGetCompetitionStructure = async (aiResult) => {
    aiResult.competitionsAssignedToGroup?.forEach((competitionItem) => {
      if (!competitionItem.Id) {
        competitionItem.Id = v4();
      }
    });
    setCompetitions(aiResult);
    sessionStorage.setItem("competitionsGroups", JSON.stringify(aiResult));
    setIsLoading(false);
  };
  const handleGetResults = () => {
    setIsLoading(true);
    const image = getValues("fileUploads");
    getResultFromImage(image, onGetCompetitionStructure, aiPrompt);
  };
  const handleSubmit = async () => {
    setIsLoading(true);
    if (selectedCheckboxes.length > 0) {
      let selectedCompetitions = competitions.competitionsAssignedToGroup.filter((competition) => selectedCheckboxes.includes(competition.Id));
      let postData = { ...competitions, competitionsAssignedToGroup: selectedCompetitions };
      await post("/SetUpJson/InstallEventSettingsItems", postData);
      n.success("Competitions have been successfully installed");
      setTimeout(() => {
        window.top.location.href = "/CompetitionStructure/Tab";
      }, 2e3);
      setIsLoading(false);
    } else {
      n.error("Please select at least one competition");
      setIsLoading(false);
    }
  };
  const handleSplit = (item, index) => {
    let maleRow = { ...item, GenderGenderTitle: "Male", Id: v4() };
    let femaleRow = { ...item, GenderGenderTitle: "Female", Id: v4() };
    let before = competitions.competitionsAssignedToGroup.slice(0, index);
    let after = competitions.competitionsAssignedToGroup.slice(index + 1);
    competitions.competitionsAssignedToGroup = [...before, maleRow, femaleRow, ...after];
    onGetCompetitionStructure({ ...competitions });
  };
  const handleSelectAll = () => {
    const checkboxes = competitions.competitionsAssignedToGroup.map((competition) => competition.Id);
    if (selectAll) {
      setSelectedCheckboxes([]);
    } else {
      setSelectedCheckboxes(checkboxes);
    }
    setSelectAll(!selectAll);
    sessionStorage.setItem("selectedCheckboxes", JSON.stringify(selectedCheckboxes));
  };
  const handleIndividualCheckbox = (index) => {
    if (selectedCheckboxes.includes(index)) {
      setSelectedCheckboxes(selectedCheckboxes.filter((item) => item.id !== index));
    } else {
      setSelectedCheckboxes([...selectedCheckboxes, index]);
    }
    sessionStorage.setItem("selectedCheckboxes", JSON.stringify(selectedCheckboxes));
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(LayoutOuter, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col grow", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        heading: "AI Competition Structure",
        subHeading: "Upload images and use AI to generate competition structure automatically"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-center w-full flex-col place-items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        MultiImageUpload,
        {
          label: "Upload Images Related to the competition",
          errors,
          control,
          validExtensions: ["jpg", "png", "jpeg"],
          validExtensionsMimeTypes: ["image/jpg", "image/png", "image/jpeg"],
          fieldName: "fileUploads",
          fileUploadUrl: "/uploadJson/UploadCandidateImage",
          editId: formData?.id,
          onChangeValidation: (x) => {
            sessionStorage.setItem("images", JSON.stringify(x));
            setValue("fileUploads", x);
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 px-10 flex flex-col w-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "aiPrompt", className: "block text-sm font-semibold text-onSurface", children: "AI Prompt" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "textarea",
          {
            id: "aiPrompt",
            name: "aiPrompt",
            value: aiPrompt,
            onChange: (e) => {
              setAiPrompt(e.target.value);
              localStorage.setItem("aiPrompt", e.target.value);
            },
            rows: "4",
            className: "mt-1 min-w-full max-w-full block w-full shadow-sm sm:text-sm focus:ring-primary focus:border-primary border-border rounded-md",
            placeholder: "Enter the AI Prompt"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: handleGetResults,
          className: "mt-8 w-full max-w-72 rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow hover:bg-primaryHover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
          children: "Get Results"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://ilovepdf.com/pdf_to_jpg", target: "_blank", className: "text-sm text-blue-500 mt-2", rel: "noreferrer", children: "Don’t have an Image to test? Click here to convert PDF to Image" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flow-root", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            TinyTable,
            {
              heading: "Age Wise Groups",
              items: competitions?.ageWiseGroups,
              isLoading,
              columns: [
                { field: "GroupName", label: "Group Name" },
                { field: "AgeFrom", label: "Age From" },
                { field: "AgeTo", label: "Age To" }
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            TinyTable,
            {
              heading: "Competition Items",
              items: competitions?.competitionItems,
              isLoading,
              columns: [
                { field: "Title", label: "Title" },
                { field: "CategoryCategoryName", label: "Category" },
                { field: "ScoreLabelLabel", label: "Score By" }
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            TinyTable,
            {
              heading: "Ranks",
              items: competitions?.ranks,
              isLoading,
              columns: [
                { field: "ParticipantTypeTitle", label: "Participant Type" },
                { field: "GroupGroupName", label: "Group Name" },
                { field: "CompetitionItemTitle", label: "Competition Item" },
                { field: "RankTitle", label: "Rank Title" },
                { field: "Points", label: "Points" }
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            TinyTable,
            {
              heading: "Grades",
              items: competitions?.grades,
              isLoading,
              columns: [
                { field: "ParticipantTypeTitle", label: "Participant Type" },
                { field: "GroupGroupName", label: "Group Name" },
                { field: "CompetitionItemTitle", label: "Competition Item" },
                { field: "GradeName", label: "Grade Title" },
                { field: "Points", label: "Points" }
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sm:flex sm:items-center px-10 mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:flex-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-base font-semibold leading-6 text-onSurface", children: "Generated Competitions" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-onSurfaceVariant", children: "A list of all AI generated competitions." })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8 relative", children: [
          isLoading && /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "min-w-full divide-y divide-gray-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "divide-x divide-gray-200", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", className: "py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-onSurface sm:pl-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  id: "selectAll",
                  name: "selectAll",
                  type: "checkbox",
                  checked: selectAll,
                  "aria-describedby": "selectAll-description",
                  className: "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600",
                  onChange: handleSelectAll
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", className: "py-3.5 pl-4 pr-4 text-left text-xs font-semibold text-onSurface", children: "Participant Type" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", className: "py-3.5 pl-4 pr-4 text-left text-xs font-semibold text-onSurface", children: "Group Name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", className: "py-3.5 pl-4 pr-4 text-left text-xs font-semibold text-onSurface", children: "Competition Name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", className: "py-3.5 pl-4 pr-4 text-left text-xs font-semibold text-onSurface", children: "Language" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", className: "py-3.5 pl-4 pr-4 text-left text-xs font-semibold text-onSurface", children: "Gender" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", className: "py-3.5 pl-4 pr-4 text-left text-xs font-semibold text-onSurface", children: "Split Gender" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", className: "py-3.5 pl-4 pr-4 text-left text-xs font-semibold text-onSurface", children: "Remarks" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", className: "py-3.5 pl-4 pr-4 text-left text-xs font-semibold text-onSurface", children: "Maximum Score" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", className: "py-3.5 pl-4 pr-4 text-left text-xs font-semibold text-onSurface", children: "Maximum Candidates" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", className: "py-3.5 pl-4 pr-4 text-left text-xs font-semibold text-onSurface", children: "Fees" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", className: "py-3.5 pl-4 pr-4 text-left text-xs font-semibold text-onSurface", children: "Maximum Minutes" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", className: "py-3.5 pl-4 pr-4 text-left text-xs font-semibold text-onSurface", children: "Maximum Seconds" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", className: "py-3.5 pl-4 pr-4 text-left text-xs font-semibold text-onSurface", children: "Minimum Minutes" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", className: "py-3.5 pl-4 pr-4 text-left text-xs font-semibold text-onSurface", children: "Minimum Seconds" })
            ] }) }),
            competitions?.competitionsAssignedToGroup?.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-gray-200 bg-white", children: competitions?.competitionsAssignedToGroup?.map((competition, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "divide-x divide-gray-200", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-2 py-2 text-xs font-medium text-onSurface", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  id: `checkbox${competition.Id}`,
                  name: `checkbox${competition.Id}`,
                  type: "checkbox",
                  checked: selectedCheckboxes.includes(competition.Id),
                  "aria-describedby": `checkbox${index}-description`,
                  className: "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600",
                  onChange: () => handleIndividualCheckbox(competition.Id)
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-2 py-2 text-xs font-medium text-onSurface", children: competition.ParticipantTypeTitle }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-2 py-2 text-xs font-medium text-onSurface", children: competition.GroupGroupName }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-2 py-2 text-xs font-medium text-onSurface", children: competition.CompetitionItemTitle }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-2 py-2 text-xs font-medium text-onSurface", children: competition.LanguageLanguageName }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-2 py-2 text-xs font-medium text-onSurface flex justify-center ", children: [
                competition.GenderGenderTitle,
                " "
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-2 py-2 text-xs font-medium text-onSurface", children: competition.GenderGenderTitle === "Both" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => {
                    handleSplit(competition, index);
                  },
                  type: "button",
                  className: "rounded-full bg-primary p-1 text-white shadow-sm hover:bg-primaryHover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef, { "aria-hidden": "true", className: "h-5 w-5" })
                }
              ) : null }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-2 py-2 text-xs font-medium text-onSurface", children: competition.Remarks }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-2 py-2 text-xs font-medium text-onSurface", children: competition.MaximumScore }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-2 py-2 text-xs font-medium text-onSurface", children: competition.MaximumCandidates }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-2 py-2 text-xs font-medium text-onSurface", children: competition.Fees }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-2 py-2 text-xs font-medium text-onSurface", children: competition.MaximumMinutes }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-2 py-2 text-xs font-medium text-onSurface", children: competition.MaximumSeconds }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-2 py-2 text-xs font-medium text-onSurface", children: competition.MinimumMinutes }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-2 py-2 text-xs font-medium text-onSurface", children: competition.MinimumSeconds })
            ] }, competition.Id)) }, competitions?.competitionsAssignedToGroup?.length)
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center w-full flex-col place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: handleSubmit,
          className: "mt-8 w-full max-w-72 rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow hover:bg-green-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600",
          children: "Submit"
        }
      ) })
    ] })
  ] }) });
}
export {
  OpenAiCompetitionStructure as default
};
