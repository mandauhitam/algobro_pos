function dropdownList() {
    document.getElementById("myDropdown").classList.toggle('show');
  }

function filterFunction() {
    var input, filter, ul, li, span, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    span = document.getElementById("myDropdown");
    a = span.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }
