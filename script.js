const showMoreIcon = document.querySelector(
  '.show-more .material-symbols-outlined'
);
const showMore = document.querySelector('.show-more');
const speakerList = document.querySelector('.speaker-list');
const cardData = [
  {
    name: 'Abebe Ayele',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam nobis nemo vitae tempora et magni in corporis earum illum cupiditate repudiandae',
    featuredimg: 'https://randomuser.me/api/portraits/men/36.jpg',
    job: 'Director of Science',
  },
  {
    name: 'Yordanos Kebede',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam nobis nemo vitae tempora et magni in corporis earum illum cupiditate repudiandae',
    featuredimg: 'https://randomuser.me/api/portraits/women/30.jpg',
    job: 'Director of Science',
  },
  {
    name: 'Bereket Tamiru',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam nobis nemo vitae tempora et magni in corporis earum illum cupiditate repudiandae',
    featuredimg: 'https://randomuser.me/api/portraits/men/61.jpg',
    job: 'Director of Science',
  },
  {
    name: 'Yenenesh Tebarek',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam nobis nemo vitae tempora et magni in corporis earum illum cupiditate repudiandae',
    featuredimg: 'https://randomuser.me/api/portraits/women/65.jpg',
    job: 'Director of Science',
  },
  {
    name: 'Isac Kelemu',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam nobis nemo vitae tempora et magni in corporis earum illum cupiditate repudiandae',
    featuredimg: 'https://randomuser.me/api/portraits/men/80.jpg',
    job: 'Director of Science',
  },
  {
    name: 'Samrawit Tamene',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam nobis nemo vitae tempora et magni in corporis earum illum cupiditate repudiandae',
    featuredimg: 'https://randomuser.me/api/portraits/women/16.jpg',
    job: 'Director of Science',
  },
];

// dynamic card
const cardContainer = document.querySelector('.speaker-list');
const cardMethods = () => {
  cardData.map((cardData) => {
    const postElement = document.createElement('div');
    postElement.classList.add('speaker');
    postElement.innerHTML = `
      <div class="speaker-img">
        <img src="${cardData.featuredimg}" alt="" />
      </div>
      <div class="speaker-text">
        <h3>${cardData.name}</h3>
        <h4>${cardData.job}</h4>
        <hr>
        <p>${cardData.description}</p>
      </div>
      `;
    return cardContainer.appendChild(postElement);
  });
};

cardMethods();

function showMoreMethod() {
  const showMoreText = document
    .querySelector('.show-more a')
    .innerHTML.toUpperCase();
  if (showMoreText === 'MORE') {
    document.querySelector('.show-more a').innerHTML = 'LESS';
    speakerList.classList.remove('hideContent');
    speakerList.classList.add('showContent');
    showMoreIcon.innerHTML = 'expand_less';
  } else {
    document.querySelector('.show-more a').innerHTML = 'MORE';
    speakerList.classList.remove('showContent');
    speakerList.classList.add('hideContent');
    showMoreIcon.innerHTML = 'expand_more';
  }
}

showMore.addEventListener('click', showMoreMethod);
