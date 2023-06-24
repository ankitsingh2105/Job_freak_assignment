const changeSection = (id) => {
    let hideSections = document.querySelectorAll(".section_panel section");
    for (var i = 0; i < hideSections.length; i++) {
      hideSections[i].classList.remove('show');
      hideSections[i].classList.add('hide');
    }
    
    let sectionContent = document.querySelector(`#${id}`);
    sectionContent.classList.remove("hide");
    sectionContent.classList.add("show");
  }
  