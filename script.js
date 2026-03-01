const step_1 = document.getElementById("step_1");   
const step_2 = document.getElementById("step_2");
const step_3 = document.getElementById("step_3");   
const step_4 = document.getElementById("step_4");
const your_info = document.getElementById("your_info");
const your_plan = document.getElementById("your_plan");
const add_ons = document.getElementById("add_ons");
const name_input = document.getElementById("name_input");
const email_input = document.getElementById("email_input");
const number_input = document.getElementById("number_input");
const arcade_yearly = document.getElementById("arcade_yearly");
const arcade_monthly = document.getElementById("arcade_monthly");
const advanced_yearly = document.getElementById("advanced_yearly");
const advanced_monthly = document.getElementById("advanced_monthly");
const pro_yearly = document.getElementById("pro_yearly");
const pro_monthly = document.getElementById("pro_monthly");
const two_months_arcade = document.getElementById("two_months_arcade");
const two_months_advanced = document.getElementById("two_months_advanced");
const two_months_pro = document.getElementById("two_months_pro");
const yearly = document.getElementById("yearly");
const monthly = document.getElementById("monthly");
const yearly_toggle = document.getElementById("yearly_toggle");
const monthly_toggle = document.getElementById("monthly_toggle");
const first_step = document.getElementById("first_step");
const second_step = document.getElementById("second_step");
const third_step = document.getElementById("third_step");
const fourth_step = document.getElementById("fourth_step");
const go_back_plan = document.getElementById("go_back_plan");
const go_back_add_ons = document.getElementById("go_back_add_ons");
const arcade_container = document.getElementById("arcade_container");
const advanced_container = document.getElementById("advanced_container");
const pro_container = document.getElementById("pro_container");
const service_container = document.getElementById("service_container");
const storage_container = document.getElementById("storage_container");
const profile_container = document.getElementById("profile_container");
const service_yr = document.getElementById("service_yr");
const service_mo = document.getElementById("service_mo");
const storage_yr = document.getElementById("storage_yr");
const storage_mo = document.getElementById("storage_mo");
const profile_yr = document.getElementById("profile_yr");
const profile_mo = document.getElementById("profile_mo");
cons

step_1.addEventListener("click", () => {
    your_info.classList.remove("hidden");   
    your_plan.classList.add("hidden");
    add_ons.classList.add("hidden");
    step_1.classList.add("bg-blue-200", "text-gray-700");
    step_1.classList.remove("border", "border-gray-100", "text-gray-100");
    step_2.classList.remove("bg-blue-200", "text-gray-700", "border-0");
    step_2.classList.add("border", "border-gray-100", "text-gray-100");
    step_3.classList.remove("bg-blue-200", "text-gray-700", "border-0");
    step_3.classList.add("border", "border-gray-100", "text-gray-100");
    step_4.classList.remove("bg-blue-200", "text-gray-700", "border-0");
    step_4.classList.add("border", "border-gray-100", "text-gray-100");
     if (arcade_container.classList.contains("border-gray-300") && advanced_container.classList.contains("border-gray-300") && pro_container.classList.contains("border-gray-300")) {
        alert("Please select a plan.");
        your_info.classList.add("hidden");
        add_ons.classList.add("hidden");
        your_plan.classList.remove("hidden");
        step_2.classList.add("bg-blue-200", "text-gray-700");
        step_2.classList.remove("border", "border-gray-100", "text-gray-100");
        step_1.classList.remove("bg-blue-200", "text-gray-700", "border-0");
        step_1.classList.add("border", "border-gray-100", "text-gray-100");
        step_3.classList.remove("bg-blue-200", "text-gray-700", "border-0");
        step_3.classList.add("border", "border-gray-100", "text-gray-100");
        step_4.classList.remove("bg-blue-200", "text-gray-700", "border-0");
        step_4.classList.add("border", "border-gray-100", "text-gray-100");
        return;
    }
      else {
        your_info.classList.remove("hidden");
        add_ons.classList.add("hidden");
        your_plan.classList.add("hidden"); 
        step_1.classList.add("bg-blue-200", "text-gray-700", "border-0");
        step_1.classList.remove("border", "border-gray-100", "text-gray-100"); 
        step_2.classList.remove("bg-blue-200", "text-gray-700");
        step_2.classList.add("border", "border-gray-100", "text-gray-100");
        step_3.classList.remove("bg-blue-200", "text-gray-700");
        step_3.classList.add("border", "border-gray-100", "text-gray-100");
        step_4.classList.remove("bg-blue-200", "text-gray-700");
        step_4.classList.add("border", "border-gray-100", "text-gray-100");
      };
});

step_2.addEventListener("click", () => {
    your_info.classList.add("hidden");   
    your_plan.classList.remove("hidden");
    add_ons.classList.add("hidden");  
    step_1.classList.remove("bg-blue-200", "text-gray-700");
    step_1.classList.add("border", "border-gray-100", "text-gray-100");
    step_2.classList.add("bg-blue-200", "text-gray-700", "border-0");
    step_2.classList.remove("border", "border-gray-100", "text-gray-100");
    step_3.classList.remove("bg-blue-200", "text-gray-700");
    step_3.classList.add("border", "border-gray-100", "text-gray-100");
    step_4.classList.remove("bg-blue-200", "text-gray-700");
    step_4.classList.add("border", "border-gray-100", "text-gray-100");
    arcade_container.classList.remove("border-blue-500", "bg-blue-50");
    advanced_container.classList.remove("border-blue-500", "bg-blue-50");
    pro_container.classList.remove("border-blue-500", "bg-blue-50");
    arcade_container.classList.add("border-gray-300", "hover:bg-blue-50", "hover:border-blue-500", "transition-all", "duration-200", "ease-in-out");
    advanced_container.classList.add("border-gray-300", "hover:bg-blue-50", "hover:border-blue-500", "transition-all", "duration-200", "ease-in-out");
    pro_container.classList.add("border-gray-300", "hover:bg-blue-50", "hover:border-blue-500", "transition-all", "duration-200", "ease-in-out")
    if (name_input.value === "" || email_input.value === "" || number_input.value === "") {
        alert("Please fill in all fields.");
        your_info.classList.remove("hidden");
        your_plan.classList.add("hidden");
        add_ons.classList.add("hidden");
        step_1.classList.add("bg-blue-200", "text-gray-700");
        step_1.classList.remove("border", "border-gray-100", "text-gray-100");
        step_2.classList.remove("bg-blue-200", "text-gray-700", "border-0");
        step_2.classList.add("border", "border-gray-100", "text-gray-100");
        step_3.classList.remove("bg-blue-200", "text-gray-700", "border-0");
        step_3.classList.add("border", "border-gray-100", "text-gray-100");
        step_4.classList.remove("bg-blue-200", "text-gray-700", "border-0");
        step_4.classList.add("border", "border-gray-100", "text-gray-100");
        return;
     }
     else {
        your_info.classList.add("hidden");
        your_plan.classList.add("hidden");
        add_ons.classList.remove("hidden");
        step_2.classList.add("bg-blue-200", "text-gray-700");
        step_2.classList.remove("border", "border-gray-100", "text-gray-100");
        step_1.classList.remove("bg-blue-200", "text-gray-700", "border-0");
        step_1.classList.add("border", "border-gray-100", "text-gray-100");
        step_1.classList.remove("bg-blue-200", "text-gray-700", "border-0");
        step_1.classList.add("border", "border-gray-100", "text-gray-100");
        step_4.classList.remove("bg-blue-200", "text-gray-700", "border-0");
        step_4.classList.add("border", "border-gray-100", "text-gray-100");
     };
});

step_3.addEventListener("click", () => {
    add_ons.classList.remove("hidden");
    your_info.classList.add("hidden");  
    your_plan.classList.add("hidden");
    step_1.classList.remove("bg-blue-200", "text-gray-700");
    step_1.classList.add("border", "border-gray-100", "text-gray-100");
    step_3.classList.add("bg-blue-200", "text-gray-700", "border-0");
    step_3.classList.remove("border", "border-gray-100", "text-gray-100");
    step_2.classList.remove("bg-blue-200", "text-gray-700");
    step_2.classList.add("border", "border-gray-100", "text-gray-100");
    step_4.classList.remove("bg-blue-200", "text-gray-700");
    step_4.classList.add("border", "border-gray-100", "text-gray-100");
    if (name_input.value === "" || email_input.value === "" || number_input.value === "") {
        alert("Please fill in all fields.");
        your_info.classList.remove("hidden");
        your_plan.classList.add("hidden");
        add_ons.classList.add("hidden");
        step_1.classList.add("bg-blue-200", "text-gray-700");
        step_1.classList.remove("border", "border-gray-100", "text-gray-100");
        step_2.classList.remove("bg-blue-200", "text-gray-700", "border-0");
        step_2.classList.add("border", "border-gray-100", "text-gray-100");
        step_3.classList.remove("bg-blue-200", "text-gray-700", "border-0");
        step_3.classList.add("border", "border-gray-100", "text-gray-100");
        step_4.classList.remove("bg-blue-200", "text-gray-700", "border-0");
        step_4.classList.add("border", "border-gray-100", "text-gray-100");
        return;
     }
     else {
        your_info.classList.add("hidden");
        your_plan.classList.add("hidden");
        add_ons.classList.remove("hidden");
        step_3.classList.add("bg-blue-200", "text-gray-700");
        step_3.classList.remove("border", "border-gray-100", "text-gray-100");
        step_2.classList.remove("bg-blue-200", "text-gray-700", "border-0");
        step_2.classList.add("border", "border-gray-100", "text-gray-100");
        step_1.classList.remove("bg-blue-200", "text-gray-700", "border-0");
        step_1.classList.add("border", "border-gray-100", "text-gray-100");
        step_4.classList.remove("bg-blue-200", "text-gray-700", "border-0");
        step_4.classList.add("border", "border-gray-100", "text-gray-100");
     };
});

first_step.addEventListener("click", () => {
    your_info.classList.add("hidden");   
    your_plan.classList.remove("hidden");
    add_ons.classList.add("hidden");
    step_1.classList.remove("bg-blue-200", "text-gray-700");
    step_1.classList.add("border", "border-gray-100", "text-gray-100");
    step_2.classList.add("bg-blue-200", "text-gray-700", "border-0");
     if (name_input.value === "" || email_input.value === "" || number_input.value === "") {
        alert("Please fill in all fields.");
        your_info.classList.remove("hidden");
        your_plan.classList.add("hidden");
        add_ons.classList.add("hidden");
        step_1.classList.add("bg-blue-200", "text-gray-700");
        step_1.classList.remove("border", "border-gray-100", "text-gray-100");
        step_2.classList.remove("bg-blue-200", "text-gray-700", "border-0");
        step_2.classList.add("border", "border-gray-100", "text-gray-100");
        return;
     }
     else {
        your_info.classList.add("hidden");
        your_plan.classList.remove("hidden");
        add_ons.classList.add("hidden");
     };
});

second_step.addEventListener("click", () => {
    add_ons.classList.remove("hidden");
    your_info.classList.add("hidden");
    your_plan.classList.add("hidden");
    if (arcade_container.classList.contains("border-gray-300") && advanced_container.classList.contains("border-gray-300") && pro_container.classList.contains("border-gray-300")) {
        alert("Please select a plan.");
        your_info.classList.add("hidden");
        add_ons.classList.add("hidden");
        your_plan.classList.remove("hidden");
        step_2.classList.add("bg-blue-200", "text-gray-700");
        step_2.classList.remove("border", "border-gray-100", "text-gray-100");
        step_1.classList.remove("bg-blue-200", "text-gray-700", "border-0");
        step_1.classList.add("border", "border-gray-100", "text-gray-100");
        step_3.classList.remove("bg-blue-200", "text-gray-700", "border-0");
        step_3.classList.add("border", "border-gray-100", "text-gray-100");
        step_4.classList.remove("bg-blue-200", "text-gray-700", "border-0");
        step_4.classList.add("border", "border-gray-100", "text-gray-100");
        return;
    }
      else {
        your_info.classList.add("hidden");
        add_ons.classList.remove("hidden");
        your_plan.classList.add("hidden");  
        step_2.classList.remove("bg-blue-200", "text-gray-700");
        step_2.classList.add("border", "border-gray-100", "text-gray-100");
        step_3.classList.add("bg-blue-200", "text-gray-700", "border-0");
      };
});
go_back_plan.addEventListener("click", () => {
    your_info.classList.remove("hidden");   
    your_plan.classList.add("hidden");
    step_1.classList.add("bg-blue-200", "text-gray-700");
    step_1.classList.remove("border", "border-gray-100", "text-gray-100");
    step_2.classList.remove("bg-blue-200", "text-gray-700", "border-0");
    step_2.classList.add("border", "border-gray-100", "text-gray-100");
    if (arcade_container.classList.contains("border-gray-300") && advanced_container.classList.contains("border-gray-300") && pro_container.classList.contains("border-gray-300")) {
        alert("Please select a plan.");
        your_info.classList.add("hidden");
        your_plan.classList.remove("hidden");
        add_ons.classList.add("hidden");
        step_2.classList.add("bg-blue-200", "text-gray-700");
        step_2.classList.remove("border", "border-gray-100", "text-gray-100");
        step_1.classList.remove("bg-blue-200", "text-gray-700", "border-0");
        step_1.classList.add("border", "border-gray-100", "text-gray-100");
        step_3.classList.remove("bg-blue-200", "text-gray-700", "border-0");
        step_3.classList.add("border", "border-gray-100", "text-gray-100");
        step_4.classList.remove("bg-blue-200", "text-gray-700", "border-0");
        step_4.classList.add("border", "border-gray-100", "text-gray-100");
        return;
    }
      else {
        your_info.classList.remove("hidden");
        add_ons.classList.add("hidden");
        your_plan.classList.add("hidden");  
        step_2.classList.remove("bg-blue-200", "text-gray-700");
        step_2.classList.add("border", "border-gray-100", "text-gray-100");
        step_1.classList.add("bg-blue-200", "text-gray-700", "border-0");
      };
});

go_back_add_ons.addEventListener("click", () => {
    add_ons.classList.add("hidden");
    your_plan.classList.remove("hidden");
    your_info.classList.add("hidden");
    step_2.classList.remove("bg-blue-200", "text-gray-700", "border-0");
    step_2.classList.add("border", "border-gray-100", "text-gray-100");
    step_3.classList.remove("bg-blue-200", "text-gray-700");
    step_3.classList.add("border", "border-gray-100", "text-gray-100");
  if (service_container.classList.contains("border-gray-300") && storage_container.classList.contains("border-gray-300") && profile_container.classList.contains("border-gray-300")) {
    alert("Please select an add-on.");
    add_ons.classList.remove("hidden");
    your_info.classList.add("hidden");
    your_plan.classList.add("hidden");
    step_3.classList.add("bg-blue-200", "text-gray-700");
    step_3.classList.remove("border", "border-gray-100", "text-gray-100");
    step_1.classList.remove("bg-blue-200", "text-gray-700", "border-0");
    step_1.classList.add("border", "border-gray-100", "text-gray-100");
    step_2.classList.remove("bg-blue-200", "text-gray-700", "border-0");
    step_2.classList.add("border", "border-gray-100", "text-gray-100");
    step_4.classList.remove("bg-blue-200", "text-gray-700", "border-0");
    step_4.classList.add("border", "border-gray-100", "text-gray-100");
    return;
  }
  else {
   your_plan.classList.remove("hidden");
   add_ons.classList.add("hidden");
   your_info.classList.add("hidden");
   step_2.classList.add("bg-blue-200", "text-gray-700");
   step_2.classList.remove("border", "border-gray-100", "text-gray-100");
   step_1.classList.remove("bg-blue-200", "text-gray-700", "border-0");
   step_1.classList.add("border", "border-gray-100", "text-gray-100");
   step_3.classList.remove("bg-blue-200", "text-gray-700", "border-0");
   step_3.classList.add("border", "border-gray-100", "text-gray-100");
   step_4.classList.remove("bg-blue-200", "text-gray-700", "border-0");
   step_4.classList.add("border", "border-gray-100", "text-gray-100");
  };
    });

arcade_container.addEventListener("click", () => {
  arcade_container.classList.add("border-blue-500", "bg-blue-50");
  arcade_container.classList.remove("border-gray-300", "hover:bg-blue-50", "hover:border-blue-500");
  advanced_container.classList.remove("border-blue-500", "bg-blue-50");
  pro_container.classList.remove("border-blue-500", "bg-blue-50");
  advanced_container.classList.add("border-gray-300", "hover:bg-blue-50", "hover:border-blue-500", "transition-all", "duration-200", "ease-in-out");
  pro_container.classList.add("border-gray-300", "hover:bg-blue-50", "hover:border-blue-500", "transition-all", "duration-200", "ease-in-out");
});

advanced_container.addEventListener("click", () => {
  advanced_container.classList.add("border-blue-500", "bg-blue-50");
  advanced_container.classList.remove("border-gray-300", "hover:bg-blue-50", "hover:border-blue-500");
  arcade_container.classList.remove("border-blue-500", "bg-blue-50");
  pro_container.classList.remove("border-blue-500", "bg-blue-50");
  arcade_container.classList.add("border-gray-300", "hover:bg-blue-50", "hover:border-blue-500", "transition-all", "duration-200", "ease-in-out");
  pro_container.classList.add("border-gray-300", "hover:bg-blue-50", "hover:border-blue-500", "transition-all", "duration-200", "ease-in-out");
});

pro_container.addEventListener("click", () => {
  pro_container.classList.add("border-blue-500", "bg-blue-50");
  pro_container.classList.remove("border-gray-300", "hover:bg-blue-50", "hover:border-blue-500");
  advanced_container.classList.remove("border-blue-500", "bg-blue-50");
  arcade_container.classList.remove("border-blue-500", "bg-blue-50");
  advanced_container.classList.add("border-gray-300", "hover:bg-blue-50", "hover:border-blue-500", "transition-all", "duration-200", "ease-in-out");
  arcade_container.classList.add("border-gray-300", "hover:bg-blue-50", "hover:border-blue-500", "transition-all", "duration-200", "ease-in-out");
});

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

service_container.addEventListener("click", () => {
  service_container.classList.add("border-blue-500", "bg-blue-50");
  service_container.classList.remove("border-gray-300", "hover:bg-blue-50", "hover:border-blue-500");
  storage_container.classList.remove("border-blue-500", "bg-blue-50");
  profile_container.classList.remove("border-blue-500", "bg-blue-50");
  storage_container.classList.add("border-gray-300", "hover:bg-blue-50", "hover:border-blue-500", "transition-all", "duration-200", "ease-in-out");
  profile_container.classList.add("border-gray-300", "hover:bg-blue-50", "hover:border-blue-500", "transition-all", "duration-200", "ease-in-out");
});

storage_container.addEventListener("click", () => {
  storage_container.classList.add("border-blue-500", "bg-blue-50");
  storage_container.classList.remove("border-gray-300", "hover:bg-blue-50", "hover:border-blue-500");
  service_container.classList.remove("border-blue-500", "bg-blue-50");
  service_container.classList.add("border-gray-300", "hover:bg-blue-50", "hover:border-blue-500", "transition-all", "duration-200", "ease-in-out");
  profile_container.classList.remove("border-blue-500", "bg-blue-50");
  profile_container.classList.add("border-gray-300", "hover:bg-blue-50", "hover:border-blue-500", "transition-all", "duration-200", "ease-in-out");
});

profile_container.addEventListener("click", () => {
  profile_container.classList.add("border-blue-500", "bg-blue-50");
  profile_container.classList.remove("border-gray-300", "hover:bg-blue-50", "hover:border-blue-500");
  service_container.classList.remove("border-blue-500", "bg-blue-50");
  service_container.classList.add("border-gray-300", "hover:bg-blue-50", "hover:border-blue-500", "transition-all", "duration-200", "ease-in-out");
  storage_container.classList.remove("border-blue-500", "bg-blue-50");
  storage_container.classList.add("border-gray-300", "hover:bg-blue-50", "hover:border-blue-500", "transition-all", "duration-200", "ease-in-out");
});