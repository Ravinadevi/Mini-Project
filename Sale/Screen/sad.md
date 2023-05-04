    employeelogin-page1
    customerlogin-page2

    customersignup-page3

    Admin login->
    Addpurchase-page4
    date->currentdate
    List of vendor-add if not avaiable add
    List of employee-add if not avaiable add

        product->drop down if not avaiable
        quantity
        price
        total
        tax

        totalbill value

        /addpurchase

    {"bill":["2023-03-15","3050","pending","v1","e1"],
    "product":[["p1",5,"500","2500","250","2023-02-28","2025-03-01"],["p2",5,"250","1250","50","2023-02-28","2025-03-01"]]}

    Paybill->page5
    purchaseid
    mode

    /addbill
    {
    "puid":"puid1",
    "cash":"3000",
    "bank":"50"
    }

    Addsales-page6
    date->currentdate
    List of customer-add if not avaiable add
    List of employee-add if not avaiable add

        product->drop down if not avaiable
        quantity
        price
        total
        tax

        totalbill value

    /addsales
    {"bill":["2023-03-15","4500","pending","c1","e1"],
    "product":[["p1",5,"600","3000","300","penid1"],["p2",5,"300","1500","150","penid2"]]}

    Paysalebill->page7
    salesid
    mode

    /addsalesbill
    {
    "sid":"s1",
    "cash":"3000",
    "bank":"50"
    }

    reports
    view all sales with start and end date-page8
    view all purchase with start and end date-page9
    other report with
    view all vendor -with edit delete add
    view all customer -with edit delete add
    view all Employee -with edit delete add
    view all product -with edit delete add

        minimum order level
