const programSettingsForm = [

  {
    component:"input",
    label:"Company",
    name:"company",
    placeholder:"Enter Company"
  },

  {
    component:"input",
    label:"Company Name",
    name:"companyName",
    placeholder:"Enter Company Name"
  },

  {
    component:"select",
    label:"Country",
    name:"country",

    options:[
      {
        label:"India",
        value:"india"
      },
      {
        label:"USA",
        value:"usa"
      },
      {
        label:"Canada",
        value:"canada"
      }
    ]
  },

  {
    component:"input",
    label:"Email",
    name:"email",
    type:"email",
    placeholder:"Enter Email"
  }

];

export default programSettingsForm;