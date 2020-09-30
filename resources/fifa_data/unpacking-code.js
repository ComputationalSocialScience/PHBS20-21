for (i = 0; i < data[0].length; i++) {
  if (
    data[0][i][17] >= minutesPlayed &&
    (posNr == 0 || posNr == data[0][i][87])
  ) {
    h = data[0][i];
    //console.log(h);

    r = '<tr data-search="' + h[88] + '">';
    r +=
      '<td data-sort="' +
      h[85] +
      '" class="playerHoldTh General Discipline Defending Errors Disruption Passing Creation Goals_assists Scoring Shooting Decisive Goalkeeping" style="line-height: 18px;text-align:left;">';
    r += '<span class="img-hold-newlist">';
    r += '<img src="' + h[4] + '" />';
    r += "</span>";
    r +=
      '<span class="txt "><a class="only_desktop" style="font-weight: 400;" href="' +
      h[81] +
      '">' +
      h[2] +
      '</a><a class="only_mobile" style="font-weight: 400;" href="' +
      h[81] +
      '">' +
      h[16] +
      "</a></span>";
    r += "</td>";

    r +=
      '<td data-search="' +
      h[8] +
      " " +
      h[3] +
      '" data-sort="' +
      h[5] +
      '" class="General Discipline Defending Errors Disruption Passing Creation Goals_assists Scoring Shooting Decisive Goalkeeping" style="line-height: 18px;text-align:left;">';
    r += '<a href="' + h[82] + '"><span class="img-hold-newlist team">';
    r += '<img src="' + h[6] + '" />';
    r += "</span></a>";
    r += "</td>";

    r +=
      '<td data-sort="' +
      h[3] +
      '" class="cr small General" style="text-align:center;"><a href="' +
      h[83] +
      '"><span class="icon-flag"><i class="flag flag-' +
      h[79].toLowerCase() +
      '"></i></span></a></td>';
    r +=
      '<td data-sort="' +
      h[88] +
      '" class="cr position_holder General Discipline Defending Errors Disruption Passing Creation Goals_assists Scoring Shooting Decisive Goalkeeping"><span class="only_mobile">' +
      h[88] +
      '</span><span class="only_desktop">' +
      h[88] +
      "</span></td>";
    r += '<td class="cr small General">' + h[0] + "</td>";
    if (h[27] > 0) {
      r +=
        '<td data-sort="' +
        h[25] +
        '" class="cr small General Discipline Defending Errors Disruption Passing Creation Goals_assists Scoring Shooting Decisive Goalkeeping">' +
        h[26] +
        "&nbsp;(" +
        h[27] +
        ")</td>";
    } else {
      r +=
        '<td data-sort="' +
        h[25] +
        '" class="cr small General Discipline Defending Errors Disruption Passing Creation Goals_assists Scoring Shooting Decisive Goalkeeping">' +
        h[26] +
        "</td>";
    }
    r +=
      '<td class="cr small General Discipline Defending Errors Disruption Passing Creation Goals_assists Scoring Shooting Decisive Goalkeeping">' +
      h[17] +
      "</td>";
    r +=
      '<td data-sort="' +
      h[20] +
      '" class="cr small General Scoring Decisive"><span>' +
      h[20] +
      "</span></td>";
    r += '<td class="cr small General Creation Passing">' + h[21] + "</td>";
    r += '<td class="cr small General Discipline">' + h[18] + "</td>";
    r += '<td class="cr small General Discipline">' + h[19] + "</td>";
    r += '<td class="cr Discipline">' + checkEmpty(h[50]) + "</td>";
    r += '<td class="cr Discipline">' + checkEmpty(h[49]) + "</td>";
    //r+= '<td class="cr Defending">'+checkEmpty(h[39])+'/'+checkEmpty(h[47])+'</td>';
    //console.log(h[102]);
    r += '<td class="cr Defending">' + checkEmptyPrc(h[101]) + "</td>";
    r += '<td class="cr Defending">' + checkEmptyPrc(h[102]) + "</td>";
    r += '<td class="cr Defending">' + checkEmptyPrc(h[103]) + "</td>";

    //r+= '<td class="cr Defending">'+checkEmpty(h[44])+'/'+checkEmpty(h[65])+'</td>';
    //r+= '<td data-sort="'+h[42]+'" class="cr Defending">'+checkEmpty(h[42])+'/'+checkEmpty(h[56])+'</td>';
    r += '<td class="cr Defending">' + checkEmpty(h[52]) + "</td>";
    r += '<td class="cr Errors">' + checkEmptyRound(h[64]) + "</td>";
    r += '<td class="cr Errors">' + checkEmptyRound(h[61]) + "</td>";
    r += '<td class="cr Errors">' + checkEmpty(h[59]) + "</td>";
    r += '<td class="cr Errors">' + checkEmpty(h[40]) + "</td>";
    r += '<td class="cr Disruption">' + checkEmpty(h[35]) + "</td>";
    r += '<td class="cr Disruption">' + checkEmpty(h[51]) + "</td>";
    r += '<td class="cr Disruption">' + checkEmpty(h[41]) + "</td>";
    r += '<td class="cr Disruption">' + checkEmptyRound(h[43]) + "</td>";
    r += '<td class="cr Passing">' + checkEmpty(h[66]) + "</td>";
    r += '<td class="cr Passing">' + checkEmptyPrc(h[68]) + "</td>";
    r += '<td class="cr Passing">' + checkEmpty(h[58]) + "</td>";
    r += '<td class="cr Passing">' + checkEmpty(h[55]) + "</td>";
    r += '<td class="cr Creation">' + checkEmpty2dec(h[93]) + "</td>";
    r += '<td class="cr Creation">' + checkEmptyRound(h[100]) + "</td>";
    r += '<td class="cr Creation">' + checkEmpty(h[69]) + "</td>";
    r += '<td class="cr Creation">' + checkEmpty(h[45]) + "</td>";
    r += '<td class="cr Scoring">' + checkEmptyRound(h[31]) + "</td>";
    r += '<td class="cr Shooting">' + checkEmpty(h[53]) + "</td>";
    r += '<td class="cr Shooting">' + checkEmpty(h[54]) + "</td>";
    r += '<td class="cr Shooting">' + checkEmpty(h[60]) + "</td>";
    r += '<td class="cr ">' + checkEmpty(h[57]) + "</td>";
    r += '<td class="cr Decisive">' + checkEmptyRound(h[75]) + "</td>";
    r += '<td class="cr Decisive">' + checkEmptyRound(h[76]) + "</td>";
    r += '<td class="cr Decisive">' + checkEmptyPrc(h[97]) + "</td>";
    if (h[104] > 0 || h[105] > 0) {
      r +=
        '<td class="cr Decisive">' +
        checkEmptyRound(h[104]) +
        ":" +
        checkEmptyRound(h[105]) +
        "</td>";
    } else {
      r += '<td class="cr Decisive">-</td>';
    }

    //Goalkeeping
    r += '<td class="cr Goalkeeping">' + checkEmptyRound(h[22]) + "</td>";
    r += '<td class="cr Goalkeeping">' + checkEmpty(h[46]) + "</td>";
    r += '<td class="cr Goalkeeping">' + checkEmptyRound(h[84]) + "</td>";
    r += '<td class="cr Goalkeeping">' + checkEmpty(h[48]) + "</td>";
    r += '<td class="cr Goalkeeping">' + checkEmptyRound(h[34]) + "</td>";

    r += '<td class="cr General small">' + checkEmptyRound(h[70]) + "</td>";

    r += '<td class="cr Scoring">' + checkEmpty2dec(h[89]) + "</td>";
    r += '<td class="cr Scoring">' + checkEmpty2dec(h[90]) + "</td>";

    r += '<td class="cr Shooting">' + checkEmptyPrc(h[91]) + "</td>";
    r += '<td class="cr Shooting">' + checkEmptyPrc(h[92]) + "</td>";

    r += '<td class="cr Goals_assists">' + checkEmptyRound(h[94]) + "</td>";
    r += '<td class="cr Goals_assists">' + checkEmpty2dec(h[95]) + "</td>";
    r += '<td class="cr Goals_assists">' + checkEmpty2dec(h[96]) + "</td>";

    r +=
      '<td class="cr General small Discipline Defending Errors Disruption Passing Creation Scoring Goals_assists Shooting Decisive Goalkeeping">';
    if (h[71] != "") {
      r +=
        '<div class="cr rating" style="background:#fff;color:' +
        h[78] +
        '">' +
        checkEmpty(h[71]) +
        "</div>";
    } else {
      r += "-";
    }
    r += "</td>";
    if (h[1] != "") {
      r +=
        '<td data-sort="' +
        h[1] +
        '" class="small cr General Discipline Defending Errors Disruption Passing Creation Scoring Goals_assists Shooting Decisive Goalkeeping"><div class="rating" style="margin-left: 5px;background-color:' +
        h[80] +
        ';">' +
        h[1] +
        "</div></td>";
    } else {
      r +=
        '<td data-sort="-1" class="small cr General Discipline Defending Errors Disruption Passing Creation Scoring Goals_assists Shooting Decisive Goalkeeping"><div class="rating n_a" style="margin-left: 5px;background-color:' +
        h[80] +
        ';">N/A</div></td>';
    }
    r += "</tr>";
    $("#seasonStats table tbody").append(r);
  }
}
