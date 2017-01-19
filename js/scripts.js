$(document).ready(function() {
  $("form#message").submit(function(event) {
    event.preventDefault();
    var text = $("input#text").val();
    $(".output").text(encodeString(text));
  })
  var isPerfectSquare = function(myNumber) {
    var rootNumber = Math.sqrt(myNumber);
    rootNumber = Math.floor(rootNumber);
    if (Math.pow(rootNumber, 2) === myNumber) {
      return true;
    } else {
      return false;
    }
  }
  var getRows = function(myNumber) {
    if (isPerfectSquare(myNumber)) {
      return Math.sqrt(myNumber);
    } else {
      return Math.ceil(Math.sqrt(myNumber));
    }
  }
  var getColumns = function(myNumber) {
    if (isPerfectSquare(myNumber)) {
      return Math.sqrt(myNumber);
    } else {
      return Math.floor(Math.sqrt(myNumber));
    }
  }
  var formatEncodedString = function(myStr) {
    var spaceCounter = 0;
    var spaceAtEvery = 5;
    for (var i = 0; i < myStr.length; i += spaceAtEvery) {
      var subStr1 = myStr.substring(0, ((spaceCounter + 1) * spaceAtEvery) + spaceCounter)
      var subStr2 = myStr.substring(((spaceCounter + 1) * spaceAtEvery) + spaceCounter, myStr.length);
      myStr = subStr1 + " " + subStr2;
      spaceCounter++;
    }
    return myStr;
  }
  var encodeString = function(myStr) {
    var endcodeArray = [];
    myStr = myStr.replace(/[^a-zA-Z]/g, "");
    var strLength = myStr.length;
    var splitArray = myStr.split("");
    var rows = getRows(strLength);
    var columns = getColumns(strLength);
    alert("rows: " + rows + " columns: " + columns)
    for (var i1 = 0; i1 < columns; i1++) {
      for (var i2 = 0; i2 < rows; i2++) {
        endcodeArray.push(splitArray[i1 + (i2 * columns)])
      };
    };
    myStr = endcodeArray.join("");

    return formatEncodedString(myStr)
  }

})
