
console.log("I am Here") ;
let viz,  sheet;
const { tableau } = window;
const containerDiv = document.getElementById("vizContainer");
const hidebtn = document.getElementById("hideBtn");
const showbtn = document.getElementById("showBtn");
const resizeBtn = document.getElementById("resizeBtn");
const previousBtn = document.getElementById("previousBtn");
const nextBtn = document.getElementById("nextBtn");



//const url = "https://public.tableau.com/shared/C2YF5S28P?:toolbar=n&:display_count=n&:origin=viz_share_link";
var vizList = ["https://public.tableau.com/shared/C2YF5S28P?:toolbar=n&:display_count=n&:origin=viz_share_link",
            "http://public.tableau.com/views/RegionalSampleWorkbook/Flights",
            "http://public.tableau.com/views/RegionalSampleWorkbook/Obesity",
            "http://public.tableau.com/views/RegionalSampleWorkbook/College",
            "http://public.tableau.com/views/RegionalSampleWorkbook/Stocks",
            "http://public.tableau.com/views/RegionalSampleWorkbook/Storms"];
var vizLen = vizList.length, vizCount = 0;
const options = {
"Academic Year": "",
hideTabs: true,
  
  onFirstInteractive: function () {
  listenToMarksSelection();
    
  }
 };

 //Event Listener for clicking Previous button
previousBtn.addEventListener('click', function (){
  initViz(-1)
  console.log("Previous button clicked");
  }
);

//Event Listener for clicking Next button
nextBtn.addEventListener('click', function (){
  initViz(1)
  console.log("Next button clicked");
  }
);

//Dynamic Loading using Previous and Next Button


//Create and initialize object viz
function initViz(vizPlusMinus){
  
  vizCount = vizCount + vizPlusMinus;

  if (vizCount >= vizLen) {
  // Keep the vizCount in the bounds of the array index.
      vizCount = 0;
  } else if (vizCount < 0) {
      vizCount = vizLen - 1;
  }

  if (viz) { // If a viz object exists, delete it.
      viz.dispose();
  }

  var vizURL = vizList[vizCount];
  viz = new tableau.Viz(containerDiv, vizURL, options);
}

document.addEventListener("DOMContentLoaded", initViz(0));

function listenToMarksSelection() {
  viz.addEventListener(tableau.TableauEventName.MARKS_SELECTION, onMarksSelection);
}

function onMarksSelection(marksEvent) {
  return marksEvent.getMarksAsync().then(reportSelectedMarks);
}

function reportSelectedMarks(marks) {
  var html = "";

  for (var markIndex = 0; markIndex < marks.length; markIndex++) {
      var pairs = marks[markIndex].getPairs();
      html += "<b>Mark " + markIndex + ":</b><ul>";
      console.log("ENTERED");

      for (var pairIndex = 0; pairIndex < pairs.length; pairIndex++) {
          var pair = pairs[pairIndex];
          html += "<li><b>Field Name:</b> " + pair.fieldName;
          html += "<br/><b>Value:</b> " + pair.formattedValue + "</li>";
      }

      html += "</ul>";
  }

  var infoDiv = document.getElementById('markDetails');
  infoDiv.innerHTML = html;
}  

//event listener for click to hide the viz 
hidebtn.addEventListener('click', function() {
  console.log("Hello from my button");
  viz.hide();
});

//event listener for click to hide the viz 
showbtn.addEventListener('click', function() {
  viz.show();
});


//Function to filter data by Gender
document.getElementById("filterBtn").addEventListener('click', function() {
  
  sheet.applyFilterAsync("Gender", document.getElementById("gender").value, tableau.FilterUpdateType.REPLACE);
});

//Function to export data by format
document.getElementById("exportBtn").addEventListener('click', function() {
  var exportFormat = document.getElementById("exportFormat").value;
  
  switch(exportFormat){    
    //Using String Literal in Switch case  
    case "pdf": viz.showExportPDFDialog();  
                break;    
    case "image": viz.showExportImageDialog();  
                  break;    
    case "csv": viz.showExportCrossTabDialog();
                break;    
    case "excel": viz.exportCrossTabToExcel();
                break; 
      case "powerpoint": viz.showExportPowerPointDialog(); 
                break;       
    default:  console.log("Not able to export, becoze Invalid Format");  
    break;  
  }
});



//Function to Resize Display window
resizeBtn.addEventListener('click', function() {
  var width  = document.getElementById("resizeWidth").value;
  var height  = document.getElementById("resizeHeight").value;
  viz.setFrameSize(parseInt(width, 10), parseInt(height, 10));
});

