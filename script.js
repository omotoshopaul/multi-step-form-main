const step_1 = document.getElementById("step_1");
const step_2 = document.getElementById("step_2");
const step_3 = document.getElementById("step_3");
const step_4 = document.getElementById("step_4");

const your_info = document.getElementById("your_info");
const your_plan = document.getElementById("your_plan");
const add_ons   = document.getElementById("add_ons");
const summary   = document.getElementById("summary");
const thank_you = document.getElementById("thank_you");

const name_input   = document.getElementById("name_input");
const email_input  = document.getElementById("email_input");
const number_input = document.getElementById("number_input");

const arcade_yearly    = document.getElementById("arcade_yearly");
const arcade_monthly   = document.getElementById("arcade_monthly");
const advanced_yearly  = document.getElementById("advanced_yearly");
const advanced_monthly = document.getElementById("advanced_monthly");
const pro_yearly       = document.getElementById("pro_yearly");
const pro_monthly      = document.getElementById("pro_monthly");

const two_months_arcade   = document.getElementById("two_months_arcade");
const two_months_advanced = document.getElementById("two_months_advanced");
const two_months_pro      = document.getElementById("two_months_pro");

const yearly         = document.getElementById("yearly");
const monthly        = document.getElementById("monthly");
const yearly_toggle  = document.getElementById("yearly_toggle");
const monthly_toggle = document.getElementById("monthly_toggle");

const first_step  = document.getElementById("first_step");
const second_step = document.getElementById("second_step");
const third_step  = document.getElementById("third_step");
const fourth_step = document.getElementById("fourth_step");

const go_back_plan    = document.getElementById("go_back_plan");
const go_back_add_ons = document.getElementById("go_back_add_ons");
const go_back_summary = document.getElementById("go_back_summary");
const change_plan     = document.getElementById("change_plan");

const arcade_container   = document.getElementById("arcade_container");
const advanced_container = document.getElementById("advanced_container");
const pro_container      = document.getElementById("pro_container");

const service_container = document.getElementById("service_container");
const storage_container = document.getElementById("storage_container");
const profile_container = document.getElementById("profile_container");

const check_1 = document.getElementById("check_1");
const check_2 = document.getElementById("check_2");
const check_3 = document.getElementById("check_3");

const service_yr = document.getElementById("service_yr");
const service_mo = document.getElementById("service_mo");
const storage_yr = document.getElementById("storage_yr");
const storage_mo = document.getElementById("storage_mo");
const profile_yr = document.getElementById("profile_yr");
const profile_mo = document.getElementById("profile_mo");

const arcade_yrly    = document.getElementById("arcade_yrly");
const arcade_mthly   = document.getElementById("arcade_mthly");
const advanced_yrly  = document.getElementById("advanced_yrly");
const advanced_mthly = document.getElementById("advanced_mthly");
const pro_yrly       = document.getElementById("pro_yrly");
const pro_mthly      = document.getElementById("pro_mthly");

const arcade_yrly_price    = document.getElementById("arcade_yrly_price");
const arcade_mthly_price   = document.getElementById("arcade_mthly_price");
const advanced_yrly_price  = document.getElementById("advanced_yrly_price");
const advanced_mthly_price = document.getElementById("advanced_mthly_price");
const pro_yrly_price       = document.getElementById("pro_yrly_price");
const pro_mthly_price      = document.getElementById("pro_mthly_price");

const online_year_flex   = document.getElementById("online_year_flex");
const online_month_flex  = document.getElementById("online_month_flex");
const storage_year_flex  = document.getElementById("storage_year_flex");
const storage_month_flex = document.getElementById("storage_month_flex");
const profile_year_flex  = document.getElementById("profile_year_flex");
const profile_month_flex = document.getElementById("profile_month_flex");

const total_per_year  = document.getElementById("total_per_year");
const total_per_month = document.getElementById("total_per_month");

const yearlyTotals = {
  100: document.getElementById("total_100"),
  110: document.getElementById("total_110"),
  120: document.getElementById("total_120"),
  130: document.getElementById("total_130"),
  140: document.getElementById("total_140"),
  150: document.getElementById("total_150"),
  160: document.getElementById("total_160"),
  170: document.getElementById("total_170"),
  180: document.getElementById("total_180"),
  200: document.getElementById("total_200"),
};

const monthlyTotals = {
  10: document.getElementById("total_10"),
  11: document.getElementById("total_11"),
  12: document.getElementById("total_12"),
  13: document.getElementById("total_13"),
  14: document.getElementById("total_14"),
  15: document.getElementById("total_15"),
  16: document.getElementById("total_16"),
  17: document.getElementById("total_17"),
  18: document.getElementById("total_18"),
  20: document.getElementById("total_20"),
};

let currentStep = 1;
let isConfirmed = false;

const stepSections = [null, your_info, your_plan, add_ons, summary];
const stepDots     = [null, step_1, step_2, step_3, step_4];

function showStep(step) {
  currentStep = step;

  stepSections.forEach((section, i) => {
    if (!section) return;
    section.classList.toggle("hidden", i !== step);
  });

  thank_you.classList.add("hidden");

  stepDots.forEach((dot, i) => {
    if (!dot) return;
    if (i === step) {
      dot.classList.add("bg-blue-200", "text-gray-700");
      dot.classList.remove("border", "border-gray-100", "text-gray-100");
    } else {
      dot.classList.remove("bg-blue-200", "text-gray-700");
      dot.classList.add("border", "border-gray-100", "text-gray-100");
    }
  });
}

function showThankYou() {
  isConfirmed = true;

  stepSections.forEach((section) => {
    if (!section) return;
    section.classList.add("hidden");
  });
  thank_you.classList.remove("hidden");

  stepDots.forEach((dot, i) => {
    if (!dot) return;
    if (i === 4) {
      dot.classList.add("bg-blue-200", "text-gray-700");
      dot.classList.remove("border", "border-gray-100", "text-gray-100");
    } else {
      dot.classList.remove("bg-blue-200", "text-gray-700");
      dot.classList.add("border", "border-gray-100", "text-gray-100");
    }
  });
}

function updateSummary() {
 
  const isYearly = !yearly_toggle.classList.contains("hidden");

  const hasArcade   = arcade_container.classList.contains("border-blue-500");
  const hasAdvanced = advanced_container.classList.contains("border-blue-500");
  const hasPro      = pro_container.classList.contains("border-blue-500");

  const hasOnline  = service_container.classList.contains("border-blue-500");
  const hasStorage = storage_container.classList.contains("border-blue-500");
  const hasProfile = profile_container.classList.contains("border-blue-500");

  const allPlanLabels = [arcade_yrly, arcade_mthly, advanced_yrly, advanced_mthly, pro_yrly, pro_mthly];
  const allPlanPrices = [arcade_yrly_price, arcade_mthly_price, advanced_yrly_price, advanced_mthly_price, pro_yrly_price, pro_mthly_price];
  const allAddonRows  = [online_year_flex, online_month_flex, storage_year_flex, storage_month_flex, profile_year_flex, profile_month_flex];

  [...allPlanLabels, ...allPlanPrices, ...allAddonRows].forEach(el => el.classList.add("hidden"));

  total_per_year.classList.add("hidden");
  total_per_month.classList.add("hidden");
  Object.values(yearlyTotals).forEach(el => el && el.classList.add("hidden"));
  Object.values(monthlyTotals).forEach(el => el && el.classList.add("hidden"));

  if (isYearly) {
    if (hasArcade)   { arcade_yrly.classList.remove("hidden");   arcade_yrly_price.classList.remove("hidden"); }
    if (hasAdvanced) { advanced_yrly.classList.remove("hidden"); advanced_yrly_price.classList.remove("hidden"); }
    if (hasPro)      { pro_yrly.classList.remove("hidden");      pro_yrly_price.classList.remove("hidden"); }
  } else {
    if (hasArcade)   { arcade_mthly.classList.remove("hidden");   arcade_mthly_price.classList.remove("hidden"); }
    if (hasAdvanced) { advanced_mthly.classList.remove("hidden"); advanced_mthly_price.classList.remove("hidden"); }
    if (hasPro)      { pro_mthly.classList.remove("hidden");      pro_mthly_price.classList.remove("hidden"); }
  }

  if (isYearly) {
    if (hasOnline)  online_year_flex.classList.remove("hidden");
    if (hasStorage) storage_year_flex.classList.remove("hidden");
    if (hasProfile) profile_year_flex.classList.remove("hidden");
  } else {
    if (hasOnline)  online_month_flex.classList.remove("hidden");
    if (hasStorage) storage_month_flex.classList.remove("hidden");
    if (hasProfile) profile_month_flex.classList.remove("hidden");
  }

  let planBase   = 0;
  let addonTotal = 0;

  if (isYearly) {
    if (hasArcade)   planBase = 90;
    if (hasAdvanced) planBase = 120;
    if (hasPro)      planBase = 150;
    if (hasOnline)   addonTotal += 10;
    if (hasStorage)  addonTotal += 20;
    if (hasProfile)  addonTotal += 20;

    const total = planBase + addonTotal;
    total_per_year.classList.remove("hidden");
    if (yearlyTotals[total]) yearlyTotals[total].classList.remove("hidden");

  } else {
    if (hasArcade)   planBase = 9;
    if (hasAdvanced) planBase = 12;
    if (hasPro)      planBase = 15;
    if (hasOnline)   addonTotal += 1;
    if (hasStorage)  addonTotal += 2;
    if (hasProfile)  addonTotal += 2;

    const total = planBase + addonTotal;
    total_per_month.classList.remove("hidden");
    if (monthlyTotals[total]) monthlyTotals[total].classList.remove("hidden");
  }
}

function validateStep1() {
  if (!name_input.value.trim() || !email_input.value.trim() || !number_input.value.trim()) {
    alert("Please fill in all fields.");
    showStep(1);
    return false;
  }
  return true;
}

function validateStep2() {
  const noPlanSelected =
    arcade_container.classList.contains("border-gray-300") &&
    advanced_container.classList.contains("border-gray-300") &&
    pro_container.classList.contains("border-gray-300");

  if (noPlanSelected) {
    alert("Please select a plan.");
    showStep(2);
    return false;
  }
  return true;
}

function validateStep3() {
  const noAddOnSelected =
    service_container.classList.contains("border-gray-300") &&
    storage_container.classList.contains("border-gray-300") &&
    profile_container.classList.contains("border-gray-300");

  if (noAddOnSelected) {
    alert("Please select an add-on.");
    showStep(3);
    return false;
  }
  return true;
}

step_1.addEventListener("click", () => {
  if (isConfirmed) return;
  showStep(1);
});

step_2.addEventListener("click", () => {
  if (isConfirmed) return;
  if (!validateStep1()) return;
  showStep(2);
});

step_3.addEventListener("click", () => {
  if (isConfirmed) return;
  if (!validateStep1()) return;
  if (!validateStep2()) return;
  showStep(3);
});

step_4.addEventListener("click", () => {
  if (isConfirmed) return;
  if (!validateStep1()) return;
  if (!validateStep2()) return;
  if (!validateStep3()) return;
  updateSummary();
  showStep(4);
});

first_step.addEventListener("click", () => {
  if (!validateStep1()) return;
  showStep(2);
});

second_step.addEventListener("click", () => {
  if (!validateStep2()) return;
  showStep(3);
});

third_step.addEventListener("click", () => {
  if (!validateStep3()) return;
  updateSummary(); // populate summary before showing it
  showStep(4);
});

fourth_step.addEventListener("click", () => {
  showThankYou();
});

go_back_plan.addEventListener("click", () => {
  showStep(1);
});

go_back_add_ons.addEventListener("click", () => {
  showStep(2);
});

go_back_summary.addEventListener("click", () => {
  showStep(3);
});

change_plan.addEventListener("click", () => {
  showStep(2);
});

const planContainers = [arcade_container, advanced_container, pro_container];

function selectPlan(selected) {
  planContainers.forEach((container) => {
    if (container === selected) {
      container.classList.add("border-blue-500", "bg-blue-50");
      container.classList.remove(
        "border-gray-300", "hover:bg-blue-50", "hover:border-blue-500",
        "transition-all", "duration-200", "ease-in-out"
      );
    } else {
      container.classList.remove("border-blue-500", "bg-blue-50");
      container.classList.add(
        "border-gray-300", "hover:bg-blue-50", "hover:border-blue-500",
        "transition-all", "duration-200", "ease-in-out"
      );
    }
  });
}

arcade_container.addEventListener("click",   () => selectPlan(arcade_container));
advanced_container.addEventListener("click", () => selectPlan(advanced_container));
pro_container.addEventListener("click",      () => selectPlan(pro_container));

yearly_toggle.addEventListener("click", () => {
  arcade_yearly.classList.add("hidden");
  arcade_monthly.classList.remove("hidden");
  advanced_yearly.classList.add("hidden");
  advanced_monthly.classList.remove("hidden");
  pro_yearly.classList.add("hidden");
  pro_monthly.classList.remove("hidden");
  yearly_toggle.classList.add("hidden");
  monthly_toggle.classList.remove("hidden");
  monthly.classList.remove("text-gray-400");
  monthly.classList.add("text-gray-700");
  yearly.classList.remove("text-gray-700");
  yearly.classList.add("text-gray-400");
  two_months_arcade.classList.add("hidden");
  two_months_advanced.classList.add("hidden");
  two_months_pro.classList.add("hidden");
  service_mo.classList.remove("hidden");
  service_yr.classList.add("hidden");
  storage_mo.classList.remove("hidden");
  storage_yr.classList.add("hidden");
  profile_mo.classList.remove("hidden");
  profile_yr.classList.add("hidden");
});

monthly_toggle.addEventListener("click", () => {
  arcade_yearly.classList.remove("hidden");
  arcade_monthly.classList.add("hidden");
  advanced_yearly.classList.remove("hidden");
  advanced_monthly.classList.add("hidden");
  pro_yearly.classList.remove("hidden");
  pro_monthly.classList.add("hidden");
  monthly_toggle.classList.add("hidden");
  yearly_toggle.classList.remove("hidden");
  yearly.classList.remove("text-gray-400");
  yearly.classList.add("text-gray-700");
  monthly.classList.remove("text-gray-700");
  monthly.classList.add("text-gray-400");
  two_months_arcade.classList.remove("hidden");
  two_months_advanced.classList.remove("hidden");
  two_months_pro.classList.remove("hidden");
  service_mo.classList.add("hidden");
  service_yr.classList.remove("hidden");
  storage_mo.classList.add("hidden");
  storage_yr.classList.remove("hidden");
  profile_mo.classList.add("hidden");
  profile_yr.classList.remove("hidden");
});

const addOnContainers = [service_container, storage_container, profile_container];
const checks = [check_1, check_2, check_3];

function toggleAddOn(selected, check) {
  const isActive = selected.classList.contains("border-blue-500");

  if (isActive) {
    selected.classList.remove("border-blue-500", "bg-blue-50");
    selected.classList.add(
      "border-gray-300", "hover:bg-blue-50", "hover:border-blue-500",
      "transition-all", "duration-200", "ease-in-out"
    );
    check.classList.remove("bg-blue-500", "border-blue-500");
    check.classList.add("border-gray-300");
  } else {
    selected.classList.add("border-blue-500", "bg-blue-50");
    selected.classList.remove(
      "border-gray-300", "hover:bg-blue-50", "hover:border-blue-500"
    );
    check.classList.add("bg-blue-500", "border-blue-500");
    check.classList.remove("border-gray-300");
  }
}

service_container.addEventListener("click", () => toggleAddOn(service_container, check_1));
storage_container.addEventListener("click", () => toggleAddOn(storage_container, check_2));
profile_container.addEventListener("click", () => toggleAddOn(profile_container, check_3));

showStep(1);