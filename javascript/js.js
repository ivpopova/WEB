document.addEventListener('scroll', function(e) {
    const scrollPosition = window.scrollY;

    const menuElements = document.querySelectorAll("aside a");

    for (let i = 0, length = menuElements.length; i < length; i++) {
        if (menuElements[i].classList.contains("active")) {
            menuElements[i].classList.remove("active");
        }
    }

    const sectionList = document.querySelectorAll("section");
    let markedSection = sectionList.length - 1;

    for (let i = 0, length = sectionList.length; i < length - 1; i++ ) {
        const firstPosition = sectionList[i].offsetTop;
        const secondPostion = sectionList[i+1].offsetTop;

        if (scrollPosition >= firstPosition && scrollPosition <= secondPostion) {
            markedSection = i;
            break;
        }
    }
    
    const markedElement = document.querySelector("aside a:nth-of-type(" + (markedSection + 1) + ")");
    markedElement.classList.add("active");
  });