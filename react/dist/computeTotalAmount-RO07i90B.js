import { q as parseJson } from "./main-B7w5eCOl.js";
function computeTotalAmount(jsonSettings, competitionItems, reformattedFormData) {
  if (reformattedFormData?.JsonSettings) {
    let personJson = parseJson(reformattedFormData?.UserJsonSettings);
    let personJsonSettings = parseJson(reformattedFormData?.JsonSettings);
    reformattedFormData = { ...reformattedFormData, ...personJson, ...personJsonSettings };
  }
  let camelCaseData = {};
  Object.keys(reformattedFormData).forEach((key) => {
    let newKey = key[0]?.toLowerCase() + key.slice(1);
    if (!camelCaseData[newKey]) {
      camelCaseData[newKey] = reformattedFormData[key];
    }
  });
  reformattedFormData = { ...reformattedFormData, ...camelCaseData };
  if (reformattedFormData?.RegistrationId && !reformattedFormData?.registrationId) {
    reformattedFormData.registrationId = reformattedFormData.RegistrationId;
  }
  const paymentKeys = reformattedFormData ? Object.keys(reformattedFormData).filter((x) => x.includes("extra_payment_")) : [];
  const advancedSettings = jsonSettings?.AdditionalSettings;
  const registrationBox = jsonSettings?.components?.User?.find((x) => x.type === "RegistrationIdBox");
  const eligibleNumbers = advancedSettings?.EligibleRegistrationNumbers;
  let discounts = [];
  if (reformattedFormData?.teamMembers?.length > 0 && jsonSettings?.AdditionalSettings?.AllowTeamDiscountIfCaptainIsEligible === "Yes") {
    const captain = reformattedFormData?.teamMembers?.find((x) => x.Designation === 4);
    const captainUserJson = parseJson(captain?.UserJsonSettings);
    const captainJson = parseJson(captain?.JsonSettings);
    reformattedFormData = { ...reformattedFormData, ...captainUserJson, ...captainJson, ...captain };
    reformattedFormData["registrationId"] = captain?.RegistrationId;
  }
  const eligibilityRow = eligibleNumbers?.find((x) => x.RegistrationNumber === (reformattedFormData?.["registrationId"] ?? "-"));
  let isConditionalDiscountAccepted = registrationBox?.conditions ? registrationBox.conditions.every((condition) => {
    const value = reformattedFormData[`${condition.key.charAt(0).toLowerCase()}${condition.key.slice(1)}`];
    const originalValue = reformattedFormData[condition.key];
    return value?.toString() === condition.value?.toString() || originalValue?.toString() === condition.value?.toString();
  }) : true;
  if (eligibilityRow && isConditionalDiscountAccepted && registrationBox?.discountPercentage) {
    const discountPercent = parseFloat(registrationBox.discountPercentage);
    discounts.push({
      Title: registrationBox.discountTitle,
      DiscountPercent: discountPercent
    });
  }
  const totalFees = competitionItems.reduce((acc, current) => acc + parseFloat(current.Fees || 0), 0);
  const formatNumber = (num) => parseFloat(num || 0).toFixed(3);
  const products = competitionItems.map((item) => ({
    name: `${item.Title} - ${item.CompetitionCategoryName || ""}`,
    total: item.Fees,
    Fees: formatNumber(item.Fees)
    // Include Fees for backward compatibility with proper formatting
  }));
  const extraFeesItems = paymentKeys.flatMap((key) => {
    const item = parseJson(reformattedFormData[key]);
    return Object.entries(item).filter(([_, value]) => value.checked).map(([jsonItemKey, jsonItemValue]) => ({
      name: jsonItemKey,
      total: jsonItemValue.fees
    }));
  });
  const extraFeesTotal = extraFeesItems.reduce((acc, current) => acc + parseFloat(current.total), 0);
  let discountAmount = 0;
  if (discounts.length > 0) {
    const discount = discounts[0];
    const discountPercent = parseFloat(discount.DiscountPercent);
    discountAmount = totalFees * discountPercent / 100;
  }
  let maxIndividualFeesDiscount = 0;
  const maxIndividualFees = parseFloat(advancedSettings?.MaxIndividualTotalFees);
  const isIndividualParticipant = reformattedFormData?.participantType === "Individual";
  if (maxIndividualFees && !isNaN(maxIndividualFees) && maxIndividualFees > 0 && isIndividualParticipant) {
    const subTotalBeforeMaxDiscount = totalFees + extraFeesTotal - discountAmount;
    if (subTotalBeforeMaxDiscount > maxIndividualFees) {
      maxIndividualFeesDiscount = subTotalBeforeMaxDiscount - maxIndividualFees;
    }
  }
  const subTotal = totalFees + extraFeesTotal;
  const total = subTotal - discountAmount - maxIndividualFeesDiscount;
  const feesCurrency = jsonSettings?.AdditionalSettings?.FeesCurrency ?? "USD";
  const orders = [];
  if (products.length > 0) {
    orders.push({
      heading: "Competitions Fees",
      total: products.reduce((acc, product) => acc + parseFloat(product.total), 0),
      products
    });
  }
  if (extraFeesItems.length > 0) {
    orders.push({
      heading: "Extra Fees",
      total: extraFeesTotal,
      products: extraFeesItems
    });
  }
  if (discounts.length > 0) {
    orders.push({
      heading: "Discount",
      total: `-${discountAmount}`,
      products: discounts.map((x) => ({
        name: x.Title,
        total: `-${discountAmount}`
      }))
    });
  }
  if (maxIndividualFeesDiscount > 0) {
    orders.push({
      heading: "Maximum Fees Discount",
      total: `-${maxIndividualFeesDiscount}`,
      products: [
        {
          name: `Maximum Individual Fees Cap (${maxIndividualFees}${feesCurrency})`,
          total: `-${maxIndividualFeesDiscount}`
        }
      ]
    });
  }
  return {
    products,
    subTotal: formatNumber(subTotal),
    discountPrice: formatNumber(discountAmount),
    maxIndividualFeesDiscount: formatNumber(maxIndividualFeesDiscount),
    extraPayments: extraFeesItems,
    taxPrice: formatNumber(0),
    // Default tax price (can be configured if needed)
    total: formatNumber(total),
    feesCurrency,
    discounts,
    orders,
    bksMemberDtls: eligibilityRow || null
    // Include member details
  };
}
export {
  computeTotalAmount as c
};
