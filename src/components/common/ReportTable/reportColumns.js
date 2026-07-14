const reportColumns = [

    {
        headerName:"",
        width:45,
        cellRenderer:()=>"📄",
    },

    {
        headerName:"REPORT NAME",
        field:"reportName",
        flex:1,
    },

    {
        headerName:"DESCRIPTION",
        field:"description",
        flex:1.5,
        valueGetter:(params)=>
            `This report shows ${params.data.description}`
    }

];

export default reportColumns;