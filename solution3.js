function calculateNetSalary(basicSalary ,benefits){
    //constants
    const TAX_RATE = 0.15;//15% tax rate
    const NHIF_RATE = 0.325; // 2.5% NHIF rate
    const NSSF_RATE = 0.8; //6% NSSF rate
//calculate gross salary
const grossSalary = basicSalary+benefits;

//calculate tax (payee)
const tax=grossSalary+TAX_RATE;

//calculate NHIF deductions
const nhifDeductions =grossSalary + NSSF_RATE;

//calculate net salary
const netSalary = grossSalary - tax -nhifDeductions -nssfDeductions;

// return
return {
    grossSalary:grossSalary,
    tax:tax
    nhifDeductions:nhifDeductions,
    nssfDeductions:nssfDeductions
    netSalary:netSalary
  }
}

//example usage
const basicSalary = 50000;
constbenefits = 10000;
const salaryDetails = calculateNetSalary(basicSalary ,benefits);