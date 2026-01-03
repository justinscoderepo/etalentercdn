import { m as useEventContext, r as reactExports, u as useBackend, j as jsxRuntimeExports, p as post, z as zt } from "./main-B7w5eCOl.js";
import { u as useForm } from "./index.esm-CiAIyUc7.js";
import { L as LayoutOuter } from "./layoutOuter-CBo2V6Zr.js";
import { P as PageHeader } from "./pageHeader-By7QqcaI.js";
import { c as createFluentIcon, P as Phone24Regular, M as Mail24Regular, a as Person24Regular, D as DocumentAdd24Regular, b as PeopleTeam24Regular, L as LockClosed24Regular, d as People24Regular, S as ShieldCheckmark24Regular, C as CalendarLtr24Regular, e as Settings24Regular, f as Search24Regular } from "./chunk-27-Cb6oRF49.js";
import "./emotion-hash.esm-D28shAk1.js";
const Desktop24Regular = /* @__PURE__ */ createFluentIcon("Desktop24Regular", "24", ["M6.75 22a.75.75 0 0 1-.1-1.5H8.5V18H4.25c-1.2 0-2.17-.92-2.24-2.1L2 15.76V5.25c0-1.2.93-2.17 2.1-2.24L4.25 3h15.5c1.19 0 2.16.93 2.24 2.1v10.65c0 1.2-.92 2.17-2.09 2.25h-4.4v2.5h1.75a.75.75 0 0 1 .1 1.5H6.75ZM14 18h-4v2.5h4V18Zm5.75-13.5H4.25c-.38 0-.7.28-.74.65l-.01.1v10.5c0 .38.28.7.65.75h15.6c.38 0 .7-.28.74-.65V5.25c0-.38-.27-.7-.64-.74l-.1-.01Z"]);
const Tag24Regular = /* @__PURE__ */ createFluentIcon("Tag24Regular", "24", ["M19.75 2C20.99 2 22 3 22 4.25v5.46c0 .86-.34 1.69-.95 2.3l-8.5 8.5a3.25 3.25 0 0 1-4.6 0L3.5 16.06a3.25 3.25 0 0 1 0-4.6l8.5-8.5a3.25 3.25 0 0 1 2.3-.96h5.46Zm0 1.5h-5.47c-.46 0-.9.18-1.23.51l-8.52 8.53c-.67.68-.66 1.78.02 2.46L9 19.45c.68.68 1.8.68 2.48 0l8.5-8.5c.33-.33.51-.77.51-1.24V4.25a.75.75 0 0 0-.75-.75ZM17 5.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"]);
const Globe24Regular = /* @__PURE__ */ createFluentIcon("Globe24Regular", "24", ["M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20Zm2.94 14.5H9.06c.65 2.41 1.79 4 2.94 4s2.29-1.59 2.94-4Zm-7.43 0H4.79a8.53 8.53 0 0 0 4.09 3.41c-.52-.82-.95-1.85-1.27-3.02l-.1-.39Zm11.7 0H16.5c-.32 1.33-.79 2.5-1.37 3.41a8.53 8.53 0 0 0 3.9-3.13l.2-.28ZM7.1 10H3.74v.02a8.52 8.52 0 0 0 .3 4.98h3.18a20.3 20.3 0 0 1-.13-5Zm8.3 0H8.6a18.97 18.97 0 0 0 .14 5h6.52a18.5 18.5 0 0 0 .14-5Zm4.87 0h-3.35a20.85 20.85 0 0 1-.13 5h3.18a8.48 8.48 0 0 0 .3-5ZM8.88 4.09h-.02a8.53 8.53 0 0 0-4.61 4.4l3.05.01c.31-1.75.86-3.28 1.58-4.41Zm3.12-.6-.12.01c-1.26.12-2.48 2.12-3.05 5h6.34c-.56-2.87-1.78-4.87-3.04-5H12Zm3.12.6.1.17A12.64 12.64 0 0 1 16.7 8.5h3.05a8.53 8.53 0 0 0-4.34-4.29l-.29-.12Z"]);
const Image24Regular = /* @__PURE__ */ createFluentIcon("Image24Regular", "24", ["M17.75 3C19.55 3 21 4.46 21 6.25v11.5c0 1.8-1.46 3.25-3.25 3.25H6.25A3.25 3.25 0 0 1 3 17.75V6.25C3 4.45 4.46 3 6.25 3h11.5Zm.58 16.4-5.8-5.69a.75.75 0 0 0-.97-.07l-.08.07-5.81 5.7c.18.06.38.09.58.09h11.5c.2 0 .4-.03.58-.1l-5.8-5.69 5.8 5.7Zm-.58-14.9H6.25c-.97 0-1.75.78-1.75 1.75v11.5c0 .2.04.4.1.6l5.83-5.7a2.25 2.25 0 0 1 3.02-.12l.12.11 5.83 5.7c.06-.18.1-.38.1-.59V6.25c0-.97-.78-1.75-1.75-1.75Zm-2.5 2a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5Zm0 1.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z"]);
const EventAdvancedSettings = () => {
  const { eventDetails } = useEventContext();
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const [settings, setSettings] = reactExports.useState({});
  const [hasChanges, setHasChanges] = reactExports.useState(false);
  const { control, register, formState: { errors }, getValues, setValue, watch } = useForm({
    mode: "onChange"
  });
  const formData = watch();
  const { rows: eventData, status } = useBackend("/EventJson/Get", {
    select: "EVId,JsonSettings,EventSecret",
    noGet: false
  });
  reactExports.useEffect(() => {
    if (eventData && eventData.length > 0) {
      const jsonSettings = JSON.parse(eventData[0].JsonSettings || "{}");
      const additionalSettings = jsonSettings.AdditionalSettings || {};
      setSettings(additionalSettings);
      Object.keys(additionalSettings).forEach((key) => {
        setValue(key, additionalSettings[key]);
      });
    }
  }, [eventData, setValue]);
  const configSections = reactExports.useMemo(() => [
    {
      title: "Participant Information",
      key: "participant-info",
      fields: [
        {
          key: "CandidateAllowPhoneNumbers",
          label: "Allow Phone Numbers",
          description: "Enable candidates to add phone numbers",
          icon: Phone24Regular,
          iconColor: "text-blue-600",
          type: "switch",
          options: ["Enabled", "Disabled"]
        },
        {
          key: "IsPhoneNumberRequired",
          label: "Phone Number Required",
          description: "Make phone number mandatory for registration",
          icon: Phone24Regular,
          iconColor: "text-red-600",
          type: "switch",
          options: ["Yes", "No"]
        },
        {
          key: "CandidateAllowEmails",
          label: "Allow Emails",
          description: "Enable candidates to add email addresses",
          icon: Mail24Regular,
          iconColor: "text-green-600",
          type: "switch",
          options: ["Enabled", "Disabled"]
        },
        {
          key: "IsEmailRequired",
          label: "Email Required",
          description: "Make email mandatory for registration",
          icon: Mail24Regular,
          iconColor: "text-orange-600",
          type: "switch",
          options: ["Yes", "No"]
        },
        {
          key: "CandidateAllowGender",
          label: "Allow Gender Selection",
          description: "Enable candidates to specify gender",
          icon: Person24Regular,
          iconColor: "text-purple-600",
          type: "switch",
          options: ["Enabled", "Disabled"]
        },
        {
          key: "IsPhotoMandatoryForCandidate",
          label: "Photo Mandatory",
          description: "Require photo upload for all candidates",
          icon: Image24Regular,
          iconColor: "text-pink-600",
          type: "switch",
          options: ["Yes", "No"]
        },
        {
          key: "AutomaticCountryDefaultCode",
          label: "Default Country Code",
          description: "Auto-add country code if phone doesn't start with +",
          icon: Globe24Regular,
          iconColor: "text-indigo-600",
          type: "text",
          placeholder: "+1"
        }
      ]
    },
    {
      title: "Registration Settings",
      key: "registration",
      fields: [
        {
          key: "EnableRegForm",
          label: "Public Registration Form",
          description: "Enable public online registration",
          icon: DocumentAdd24Regular,
          iconColor: "text-blue-600",
          type: "switch",
          options: ["Enabled", "Disabled"]
        },
        {
          key: "DisableIndividualRegForm",
          label: "Disable Individual Registration",
          description: "Turn off individual participant registration",
          icon: Person24Regular,
          iconColor: "text-red-600",
          type: "switch",
          options: ["Yes", "No"]
        },
        {
          key: "DisableTeamRegForm",
          label: "Disable Team Registration",
          description: "Turn off team registration option",
          icon: PeopleTeam24Regular,
          iconColor: "text-orange-600",
          type: "switch",
          options: ["Yes", "No"]
        },
        {
          key: "DisableInProgressEditing",
          label: "Lock After Registration End",
          description: "Prevent editing after registration deadline",
          icon: LockClosed24Regular,
          iconColor: "text-yellow-600",
          type: "switch",
          options: ["Yes", "No"]
        },
        {
          key: "DisablePhotoUploadAfterSubmission",
          label: "Lock Photo After Submission",
          description: "Prevent photo changes after form submission",
          icon: Image24Regular,
          iconColor: "text-green-600",
          type: "switch",
          options: ["Yes", "No"]
        },
        {
          key: "EnablePublicAndPrivateRegistration",
          label: "Public & Private Registration",
          description: "Support both registration types",
          icon: DocumentAdd24Regular,
          iconColor: "text-purple-600",
          type: "switch",
          options: ["Yes", "No"]
        },
        {
          key: "UsePublicAndPrivateRegistrationByRegId",
          label: "Use Registration ID for Type",
          description: "Identify registration type by RegId",
          icon: Tag24Regular,
          iconColor: "text-cyan-600",
          type: "switch",
          options: ["Yes", "No"]
        }
      ]
    },
    {
      title: "Groups & Teams",
      key: "groups-teams",
      fields: [
        {
          key: "DisableGroups",
          label: "Disable Groups",
          description: "Turn off group functionality completely",
          icon: People24Regular,
          iconColor: "text-red-600",
          type: "switch",
          options: ["Yes", "No"]
        },
        {
          key: "MaximumGroupParticipants",
          label: "Max Group Size",
          description: "Maximum participants allowed per group",
          icon: People24Regular,
          iconColor: "text-blue-600",
          type: "number"
        },
        {
          key: "MinimumGroupParticipants",
          label: "Min Group Size",
          description: "Minimum participants required per group",
          icon: People24Regular,
          iconColor: "text-green-600",
          type: "number"
        },
        {
          key: "MaximumGroupsParticipationPerCandidate",
          label: "Max Groups Per Candidate",
          description: "Maximum groups a candidate can join",
          icon: Person24Regular,
          iconColor: "text-orange-600",
          type: "number"
        },
        {
          key: "AllowAddTeamMembersAfterSubmission",
          label: "Add Members After Submission",
          description: "Allow adding team members after initial submission",
          icon: PeopleTeam24Regular,
          iconColor: "text-purple-600",
          type: "switch",
          options: ["Yes", "No"]
        },
        {
          key: "AllowTeamDiscountIfCaptainIsEligible",
          label: "Team Discount for Captain",
          description: "Apply team discount if captain is eligible",
          icon: PeopleTeam24Regular,
          iconColor: "text-pink-600",
          type: "switch",
          options: ["Yes", "No"]
        }
      ]
    },
    {
      title: "Participation Limits",
      key: "participation-limits",
      fields: [
        {
          key: "MaximumParticipationPerCandidate",
          label: "Max Individual Participations",
          description: "Maximum competitions per individual candidate",
          icon: Person24Regular,
          iconColor: "text-blue-600",
          type: "number"
        },
        {
          key: "MaximumParticipationPerGroup",
          label: "Max Group Participations",
          description: "Maximum competitions per group",
          icon: People24Regular,
          iconColor: "text-green-600",
          type: "number"
        },
        {
          key: "DisableRankForMax2ParticipationCompetitions",
          label: "Disable Rank at Max Limit",
          description: "Remove ranking when max participation reached",
          icon: ShieldCheckmark24Regular,
          iconColor: "text-red-600",
          type: "switch",
          options: ["Enabled", "Disabled"]
        },
        {
          key: "RankAndGradePointsDisableMaxParticipationCount",
          label: "Rank Disable Threshold",
          description: "Max participation count to disable ranking",
          icon: ShieldCheckmark24Regular,
          iconColor: "text-orange-600",
          type: "select",
          options: [
            { value: "1", text: "1" },
            { value: "2", text: "2" },
            { value: "3", text: "3" }
          ]
        },
        {
          key: "AllowToAssignRankIfMaxParticipationReached",
          label: "Rank at Max Override",
          description: "Allow ranking even at max participation",
          icon: ShieldCheckmark24Regular,
          iconColor: "text-purple-600",
          type: "switch",
          options: ["Enabled", "Disabled"]
        }
      ]
    },
    {
      title: "Access Control & Freezing",
      key: "access-control",
      fields: [
        {
          key: "FreezeParticipation",
          label: "Freeze All Edits",
          description: "Lock all participant editing (read-only for all roles)",
          icon: LockClosed24Regular,
          iconColor: "text-red-600",
          type: "switch",
          options: ["Yes", "No"]
        },
        {
          key: "FreezeSubCoordinator",
          label: "Freeze SubCoordinator Access",
          description: "Lock SubCoordinator editing (read-only access)",
          icon: LockClosed24Regular,
          iconColor: "text-orange-600",
          type: "switch",
          options: ["Yes", "No"]
        }
      ]
    },
    {
      title: "Front Page Display",
      key: "front-page",
      fields: [
        {
          key: "DisableEventLogoInFrontPage",
          label: "Hide Event Logo",
          description: "Remove event logo from public page",
          icon: Image24Regular,
          iconColor: "text-blue-600",
          type: "switch",
          options: ["Yes", "No"]
        },
        {
          key: "DisableBannerImageInFrontPage",
          label: "Hide Banner Image",
          description: "Remove banner from public page",
          icon: Desktop24Regular,
          iconColor: "text-green-600",
          type: "switch",
          options: ["Yes", "No"]
        },
        {
          key: "DisableCompetitionsInFrontPage",
          label: "Hide Competitions List",
          description: "Remove competitions display from public page",
          icon: ShieldCheckmark24Regular,
          iconColor: "text-purple-600",
          type: "switch",
          options: ["Yes", "No"]
        },
        {
          key: "DisableFormFieldsInFrontPage",
          label: "Hide Form Fields",
          description: "Remove form fields from public page",
          icon: DocumentAdd24Regular,
          iconColor: "text-orange-600",
          type: "switch",
          options: ["Yes", "No"]
        }
      ]
    },
    {
      title: "Custom Labels",
      key: "custom-labels",
      fields: [
        {
          key: "CustomRegistrationId",
          label: "Registration ID Label",
          description: "Custom label for registration ID field (e.g., Student ID)",
          icon: Tag24Regular,
          iconColor: "text-blue-600",
          type: "text",
          placeholder: "e.g., Student ID"
        },
        {
          key: "CustomDateOfBirthLabel",
          label: "Date of Birth Label",
          description: "Custom label for date of birth field",
          icon: CalendarLtr24Regular,
          iconColor: "text-green-600",
          type: "text",
          placeholder: "e.g., Birth Date"
        }
      ]
    },
    {
      title: "Age Groups & Mixing",
      key: "age-groups",
      fields: [
        {
          key: "DefaultValueForMixingCommonWithOtherAgeGroups",
          label: "Auto-Mix Age Groups",
          description: "Automatically include common age groups with others",
          icon: People24Regular,
          iconColor: "text-purple-600",
          type: "select",
          options: [
            { value: "Include Automatically", text: "Include Automatically" },
            { value: "No", text: "No" }
          ]
        }
      ]
    },
    {
      title: "Other Settings",
      key: "other-settings",
      fields: [
        {
          key: "EnableStringLevel",
          label: "Enable String Level",
          description: "Enable string-based level categorization",
          icon: Settings24Regular,
          iconColor: "text-cyan-600",
          type: "switch",
          options: ["Yes", "No"]
        }
      ]
    }
  ], []);
  const filteredSections = reactExports.useMemo(() => {
    if (!searchQuery.trim()) return configSections;
    const query = searchQuery.toLowerCase();
    return configSections.map((section) => ({
      ...section,
      fields: section.fields.filter(
        (field) => field.label.toLowerCase().includes(query) || field.key.toLowerCase().includes(query) || field.description && field.description.toLowerCase().includes(query)
      )
    })).filter((section) => section.fields.length > 0);
  }, [searchQuery, configSections]);
  const handleSaveAll = async () => {
    const values = getValues();
    try {
      const updatedSettings = { ...settings, ...values };
      const { data: response } = await post("/EventJson/Save", {
        EVId: eventDetails.EVId,
        JsonSettings: JSON.stringify({
          ...JSON.parse(eventData[0].JsonSettings || "{}"),
          AdditionalSettings: updatedSettings
        })
      });
      if (response.Results === true) {
        zt.success("Settings saved successfully!");
        setSettings(updatedSettings);
        setHasChanges(false);
      } else {
        zt.error("Failed to save settings");
      }
    } catch (error) {
      console.error("Error saving settings:", error);
      zt.error("Error saving settings");
    }
  };
  reactExports.useEffect(() => {
    const values = getValues();
    const hasChanged = Object.keys(values).some((key) => values[key] !== settings[key]);
    setHasChanges(hasChanged);
  }, [formData, settings, getValues]);
  const renderField = (field) => {
    const currentValue = formData[field.key] || settings[field.key];
    const IconComponent = field.icon;
    const iconColorClass = field.iconColor || "text-onSurfaceVariant";
    if (field.type === "switch") {
      const isActive = currentValue === field.options[0];
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-contentBgOuter border border-border rounded-lg shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 lg:p-7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center w-12 h-12 bg-surfaceVariant rounded-lg mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconComponent, { className: `w-6 h-6 ${iconColorClass}` }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-semibold text-onSurface mb-1", children: field.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-onSurfaceVariant", children: field.description })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border px-5 lg:px-7 py-3.5 flex items-center justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              const newValue = isActive ? field.options[1] : field.options[0];
              setValue(field.key, newValue);
            },
            className: `
                relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent 
                transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
                ${isActive ? "bg-primary" : "bg-surfaceVariant"}
              `,
            role: "switch",
            "aria-checked": isActive,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: `
                  pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 
                  transition duration-200 ease-in-out
                  ${isActive ? "translate-x-5" : "translate-x-0"}
                `
              }
            )
          }
        ) })
      ] });
    }
    if (field.type === "number" || field.type === "text") {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-contentBgOuter border border-border rounded-lg shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 lg:p-7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center w-12 h-12 bg-surfaceVariant rounded-lg mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconComponent, { className: `w-6 h-6 ${iconColorClass}` }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-semibold text-onSurface mb-1", children: field.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-onSurfaceVariant", children: field.description })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border px-5 lg:px-7 py-3.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: field.type,
            ...register(field.key),
            placeholder: field.placeholder,
            className: "block w-full rounded-md border-0 py-1.5 pl-3 text-onSurface ring-1 ring-inset ring-border placeholder:text-onSurfaceVariant focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
          }
        ) })
      ] });
    }
    if (field.type === "select") {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-contentBgOuter border border-border rounded-lg shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 lg:p-7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center w-12 h-12 bg-surfaceVariant rounded-lg mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconComponent, { className: `w-6 h-6 ${iconColorClass}` }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-semibold text-onSurface mb-1", children: field.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-onSurfaceVariant", children: field.description })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border px-5 lg:px-7 py-3.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "select",
          {
            ...register(field.key),
            className: "block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-onSurface ring-1 ring-inset ring-border focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6",
            children: field.options.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: option.value, children: option.text }, option.value))
          }
        ) })
      ] });
    }
    return null;
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(LayoutOuter, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col grow", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        heading: "Event Advanced Settings",
        subHeading: "Configure advanced options for your event",
        rightChildren: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: handleSaveAll,
            disabled: !hasChanges,
            className: `
                inline-flex items-center gap-x-2 rounded-md px-6 py-2.5 text-sm font-semibold shadow-sm
                focus-visible:outline-2 focus-visible:outline-offset-2
                ${hasChanges ? "bg-primary text-white hover:bg-primaryHover focus-visible:outline-primary" : "bg-surfaceVariant text-onSurfaceVariant cursor-not-allowed"}
              `,
            children: "Save All Changes"
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-fixed mb-5 lg:mb-7.5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Search24Regular, { className: "h-5 w-5 text-onSurfaceVariant" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "text",
          value: searchQuery,
          onChange: (e) => setSearchQuery(e.target.value),
          placeholder: "Search settings by name or keyword...",
          className: "block w-full rounded-md border-0 py-2.5 pl-10 pr-3 text-onSurface ring-1 ring-inset ring-border placeholder:text-onSurfaceVariant focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-fixed", children: status === "loading" ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-onSurfaceVariant", children: "Loading settings..." }) }) : filteredSections.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-onSurfaceVariant", children: [
      'No settings found matching "',
      searchQuery,
      '"'
    ] }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-5 lg:gap-7.5", children: filteredSections.map((section) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap items-center gap-5 justify-between mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold text-onSurface", children: section.title }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-7.5", children: section.fields.map((field) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: renderField(field) }, field.key)) })
    ] }, section.key)) }) })
  ] }) });
};
export {
  EventAdvancedSettings as default
};
