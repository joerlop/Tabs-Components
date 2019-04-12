class Dropdown {
  constructor(element) {
    
    // Assign this.element to the dropdown element
    this.element = element;
    
    // Get the element with the ".dropdown-button" class found in 
    // the dropdown element (look at the HTML for context)
    this.button = this.element.querySelector(".dropdown-button");
    
    // assign the reference to the ".dropdown-content" class 
    // found in the dropdown element
    this.content = this.element.querySelector(".dropdown-content");
    
    // Add a click handler to the button reference and call 
    // the toggleContent method.
    this.button.addEventListener('click', () => {
      this.toggleContent();
    })
  }

  toggleContent() {
    // Toggle the ".dropdown-hidden" class off and on
    if (this.content.classList.contains("slide-right")) {
      this.content.classList.replace("slide-right", "slide-left");
    } else if (this.content.classList.contains("slide-left")) {
      this.content.classList.replace("slide-left", "slide-right");
    } else {
      this.content.classList.toggle("slide-right");
    }
  }
}


// Nothing to do here, just study what the code is doing and move on to the Dropdown class
let dropdowns = document.querySelectorAll('.dropdown').forEach( dropdown => new Dropdown(dropdown));