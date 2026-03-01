// ─────────────────────────────────────────────
//  ELEMENT REFS
// ─────────────────────────────────────────────

const step_1 = document.getElementById("step_1");
const step_2 = document.getElementById("step_2");
const step_3 = document.getElementById("step_3");
const step_4 = document.getElementById("step_4");

const your_info = document.getElementById("your_info");
const your_plan = document.getElementById("your_plan");
const add_ons   = document.getElementById("add_ons");

const name_input   = document.getElementById("name_input");
const email_input  = document.getElementById("email_input");
const number_input = document.getElementById("number_input");

const arcade_yearly   = document.getElementById("arcade_yearly");
const arcade_monthly  = document.getElementById("arcade_monthly");
const advanced_yearly  = document.getElementById("advanced_yearly");
const advanced_monthly = document.getElementById("advanced_monthly");
const pro_yearly   = document.getElementById("pro_yearly");
const pro_monthly  = document.getElementById("pro_monthly");

const two_months_arcade   = document.getElementById("two_months_arcade");
const two_months_advanced = document.getElementById("two_months_advanced");
const two_months_pro      = document.getElementById("two_months_pro");

const yearly        = document.getElementById("yearly");
const monthly       = document.getElementById("monthly");
const yearly_toggle = document.getElementById("yearly_toggle");
const monthly_toggle = document.getElementById("monthly_toggle");

const first_step  = document.getElementById("first_step");
const second_step = document.getElementById("second_step");
const third_step  = document.getElementById("third_step");
const fourth_step = document.getElementById("fourth_step");

const go_back_plan    = document.getElementById("go_back_plan");
const go_back_add_ons = document.getElementById("go_back_add_ons");

const arcade_container   = document.getElementById("arcade_container");
const advanced_container = document.getElementById("advanced_container");
const pro_container      = document.getElementById("pro_container");

const service_container = document.getElementById("service_container");
const storage_container = document.getElementById("storage_container");
const profile_container = document.getElementById("profile_container");

const service_yr = document.getElementById("service_yr");
const service_mo = document.getElementById("service_mo");
const storage_yr = document.getElementById("storage_yr");
const storage_mo = document.getElementById("storage_mo");
const profile_yr = document.getElementById("profile_yr");
const profile_mo = document.getElementById("profile_mo");


// ─────────────────────────────────────────────
//  CENTRAL STATE
// ─────────────────────────────────────────────

let currentStep = 1;

const stepSections = [null, your_info, your_plan, add_ons]; // index 0 unused; step 4 (summary) can be added here
const stepDots     = [null, step_1, step_2, step_3, step_4];


// ─────────────────────────────────────────────
//  CORE ROUTING — single source of truth
// ─────────────────────────────────────────────

/**
 * Show a given step, hide all others, and update sidebar dot styling.
 * @param {number} step  1 | 2 | 3 | 4
 */
function showStep(step) {
  currentStep = step;

  // Show / hide content sections
  stepSections.forEach((section, i) => {
    if (!section) return;
    if (i === step) {
      section.classList.remove("hidden");
    } else {
      section.classList.add("hidden");
    }
  });

  // Update sidebar dots
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


// ─────────────────────────────────────────────
//  VALIDATION — one function per step
// ─────────────────────────────────────────────

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


// ─────────────────────────────────────────────
//  SIDEBAR DOT NAVIGATION
//  Dots only navigate backward, or to an already-completed step.
//  Tapping a future step first validates all prior steps.
// ─────────────────────────────────────────────

step_1.addEventListener("click", () => {
  showStep(1);
});

step_2.addEventListener("click", () => {
  if (!validateStep1()) return;
  showStep(2);
});

step_3.addEventListener("click", () => {
  if (!validateStep1()) return;
  if (!validateStep2()) return;
  showStep(3);
});

step_4.addEventListener("click", () => {
  if (!validateStep1()) return;
  if (!validateStep2()) return;
  if (!validateStep3()) return;
  showStep(4);
});


// ─────────────────────────────────────────────
//  NEXT STEP BUTTONS
// ─────────────────────────────────────────────

// Step 1 → Step 2
first_step.addEventListener("click", () => {
  if (!validateStep1()) return;
  showStep(2);
});

// Step 2 → Step 3
second_step.addEventListener("click", () => {
  if (!validateStep2()) return;
  showStep(3);
});

// Step 3 → Step 4
third_step.addEventListener("click", () => {
  if (!validateStep3()) return;
  showStep(4);
});


// ─────────────────────────────────────────────
//  GO BACK BUTTONS
//  "Go Back" never validates — it always goes back one step.
// ─────────────────────────────────────────────

go_back_plan.addEventListener("click", () => {
  showStep(1);
});

go_back_add_ons.addEventListener("click", () => {
  showStep(2);
});


// ─────────────────────────────────────────────
//  PLAN SELECTION  (arcade / advanced / pro)
// ─────────────────────────────────────────────

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


// ─────────────────────────────────────────────
//  BILLING TOGGLE  (yearly ↔ monthly)
// ─────────────────────────────────────────────

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


// ─────────────────────────────────────────────
//  ADD-ON SELECTION  (service / storage / profile)
//  Each add-on can be toggled independently.
// ─────────────────────────────────────────────

const addOnContainers = [service_container, storage_container, profile_container];

function toggleAddOn(selected) {
  const isActive = selected.classList.contains("border-blue-500");

  if (isActive) {
    // Deselect
    selected.classList.remove("border-blue-500", "bg-blue-50");
    selected.classList.add(
      "border-gray-300", "hover:bg-blue-50", "hover:border-blue-500",
      "transition-all", "duration-200", "ease-in-out"
    );
  } else {
    // Select
    selected.classList.add("border-blue-500", "bg-blue-50");
    selected.classList.remove(
      "border-gray-300", "hover:bg-blue-50", "hover:border-blue-500"
    );
  }
}

service_container.addEventListener("click", () => toggleAddOn(service_container));
storage_container.addEventListener("click", () => toggleAddOn(storage_container));
profile_container.addEventListener("click", () => toggleAddOn(profile_container));


// ─────────────────────────────────────────────
//  INIT — ensure correct starting state
// ─────────────────────────────────────────────

showStep(1);