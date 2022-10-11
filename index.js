const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    
  ]

function superbowlWin(record,result){
    const footballWin = record.find(object => object.result ==="W" )
    console.log(footballWin)
    

    
    if (footballWin != undefined){ return footballWin.year
    }
    else {
        return (undefined)
    }
}
superbowlWin()