document.addEventListener('DOMContentLoaded', eve => {
//  ====================
// |  Page Navigation   |
//  ====================
  document.querySelectorAll('.nav').forEach(spaner => {
    spaner.addEventListener('click', evn => {
      document.querySelectorAll('.section').forEach(section => {
        if (section.id.includes(spaner.getAttribute('href'))) {
          window.open(`#${spaner.getAttribute('href')}`, '_self')
        }
      })
    })
  })

//  ====================
// |  Show Less Button  |
//  ====================

  const moreMore = document.getElementById('moreGit').innerHTML

  let showMore = document.getElementById('show')
  showMore.addEventListener('click', () => {
    if (showMore.textContent === 'Show Less') {
      showMore.textContent = 'Show More'
      document.getElementById('moreGit').innerHTML = ''
      document.getElementById('moreGit').setAttribute = ('display', 'grid')
      console.log(document.getElementById('moreGit').attributes)
    } else {
      showMore.textContent = 'Show Less'
      document.getElementById('moreGit').innerHTML = moreMore
    }
  })

//  ====================
// |   GitHub & Live    |
//  ====================

  let linkSnowman = document.getElementById('linkSnowman')
  linkSnowman.addEventListener('click', () => {
    let location = linkSnowman.getAttribute('href')
    window.open(location, '_blank')
  })

  let linkTrader = document.getElementById('linkTrader')
  linkTrader.addEventListener('click', () => {
    let location = linkTrader.getAttribute('href')
    window.open(location, '_blank')
  })

//  ====================
// |  Skills Selection  |
//  ====================

  let optionSelected = document.getElementById('option-selected')
  optionSelected.addEventListener('change', () => {
    document.querySelectorAll('.icon').forEach(icon => {
      if (optionSelected.value === 'All') {
        icon.classList.remove('invisible')
        icon.classList.remove('visible')
      } else if (optionSelected.value === icon.classList[1]) {
        icon.classList.remove('invisible')
        icon.classList.add('visible')
      } else {
        icon.classList.add('invisible')
        icon.classList.remove('visible')
      }
    })
  })

//  ====================
// |  Footer Contact    |
//  ====================

document.querySelectorAll('.footer-elem').forEach(contact => {
  contact.addEventListener('click', () => {
    window.open(contact.getAttribute('href'), '_blank')
  })
})
})
