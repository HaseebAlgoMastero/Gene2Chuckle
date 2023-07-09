// ***********************************
//   for frame reference 1
// *************************************
function frame1() {
    let input = document.getElementById("gene-sequence").value;
    let formatedInput = input.replace(/\s+/g, "");
    let formatSelect = document.getElementById("format-select");
    let selectedFormat = formatSelect.value;
  
    if (input.trim() === "") {
      alert("Gene sequence should be filled.");
      return;
    }
    if (selectedFormat === "standard") {
      let uppercaseInput = formatedInput.toUpperCase();
      let combinations = [];
      for (let i = 0; i <= uppercaseInput.length - 3; i += 3) {
        let combination = uppercaseInput.slice(i, i + 3);
        combinations.push(combination);
      }
      localStorage.setItem("combinations", JSON.stringify(combinations));
      window.location.href = "output.html";
    } else {
      alert("Please select the standard format.");
    }
  }

  
 