const viewMoreButtons = document.querySelectorAll(
  '#background .section .view-more',
);
const viewLessButtons = document.querySelectorAll(
  '#background .section .view-less',
);
const sectionContents = document.querySelectorAll(
  '#background .section-content',
);

viewMoreButtons.forEach((viewMore) => {
  viewMore.addEventListener('click', () => {
    sectionContents.forEach((sectionContent, index) => {
      sectionContent.style.display = 'block';
      viewLessButtons[index].style.visibility = 'visible';
      viewMoreButtons[index].style.visibility = 'hidden';
    });
  });
});

viewLessButtons.forEach((viewLess) => {
  viewLess.addEventListener('click', () => {
    sectionContents.forEach((sectionContent, index) => {
      sectionContent.style.display = 'none';
      viewLessButtons[index].style.visibility = 'hidden';
      viewMoreButtons[index].style.visibility = '';
    });
  });
});
