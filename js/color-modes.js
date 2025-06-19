/*!
 * Color mode toggler for Bootstrap's docs (https://getbootstrap.com/)
 * Copyright 2011-2025 The Bootstrap Authors
 * Licensed under the Creative Commons Attribution 3.0 Unported License.
 */

(() => {
  'use strict'

  const translations = {
    en: {
      name: "Trevor Casey",
      traits: "Data Science | Biotechnology | Behavioral Science",
      about: "About Me",
      name_literal: "Name:",
      email_literal: "Email:",
      email: "info@trevorcasey.io",
      location_literal: "Location:",
      location: "Washington, DC USA",
      workauth_literal: "Work Auth:",
      workauth: "US & EU",
      welcome: "Welcome!",
      p1: "Over the past three years at The George Washington University, I have studied data science with a commitment to multidisciplinary inquiry. Drawing on both natural and social sciences, I focus on translating complex data into insights that drive real-world decisions. Today, I develop and refine research-driven methodologies that help organizations anticipate emerging trends and strengthen their decision-making.",
      p2: "I believe data scientists have a responsibility to present information transparently. Guided by this principle, I am committed to making STEM more approachable through clear and thoughtful communication.",
      start: "Let's Get Started!",
      quals: "View my qualifications and skills below:",
      resume: "View Resume",

    },
    de: {
      name: "Trevor Casey",
      traits: "Datenwissenschaft | Biotechnologie | Verhaltenswissenschaft",
      about: "Über mich",
      name_literal: "Name: ",
      email_literal: "E-Mail: ",
      email: "info@trevorcasey.io",
      location_literal: "Standort:",
      location: "Washington, DC USA",
      workauth_literal: "Work Auth:",
      workauth: "US / EU",
      welcome: "Herzlich willkommen!",
      p1: "Seit drei Jahren studiere ich Datenwissenschaft an der George Washington University. Ich verfolge einen interdisziplinären Studienansatz und interessiere mich besonders für Biotechnologie und Verhaltenswissenschaft. Ich benutze Datenmethoden, um Fragen zu stellen, Antworten zu finden und Themen besser zu verstehen.",
      p2: "Gute Kommunikation ist für mich ein zentraler Teil der Wissenschaft. Deshalb setze ich mich dafür ein, dass Arbeiten mit Daten verantwortungsvoll und verständlich kommuniziert werden.",
      start: "Legen wir los!",
      quals: "Hier finden Sie meine Qualifikationen und Fähigkeiten:",
      resume: "Lebenslauf ansehen",

    },
  };

  const getStoredLanguage = () => localStorage.getItem('language')
  const setStoredLanguage = language => localStorage.setItem('language', language)

  const getPreferredLanguage = () => {
    const storedLanguage = getStoredLanguage()
    if (storedLanguage) {
      return storedLanguage
    }
    else {
      var userLang = navigator.language || navigator.userLanguage
      if (userLang.split('-')[0] === "de") {
        return 'de'
      }
      else {
        return 'en'
      }
    }
    //return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  const setLanguage = language => {
      //document.documentElement.setAttribute('data-bs-language', language)
      document.documentElement.lang = language;
  }

  setLanguage(getPreferredLanguage())

  const showActiveLanguage = (language, focus = false) => {

    if (language === 'de'){

      document.documentElement.lang = "de";

      document.querySelector('#coverOverlay').style.background = ''
      document.querySelector('#footerOverlay').style.background = ''
      document.querySelector('.fh5co-bg-dark').style.background = 'rgba(139,167,139,0.9)'
      //$('div.overlay').animate({backgroundColor: '#FF0000'}, 'slow');
      //document.querySelector('div.overlay').style.background = 'rgba(255,0,0,0.9)'
      //document.querySelector('#coverOverlay').classList.add('overlay-deutsch')
      //document.querySelector('#coverOverlay').classList.remove('overlay')
      document.querySelector('#coverOverlay').classList.replace('overlay','overlay-deutsch')
      //document.querySelector('body').style.background = "rgba(139,167,139,0.9)"
      //document.querySelector('body').style.background = "rgba(139,167,139,0.9)"
      //document.querySelector('body').style.color = 'FloralWhite'

      const t1 = document.querySelectorAll('.info li .first-block')
      const t2 = document.querySelectorAll('.info li .second-block')
      const t3 = document.querySelectorAll('h2')
      const t4 = document.querySelectorAll('#resumeButton')
      const t5 = document.querySelectorAll('#socialIcon-1')
      const t6 = document.querySelectorAll('#socialIcon-2')
      /*t1.forEach(element => {
        //element.textContent = 'All demo classes updated.';
        element.style.color = '#fff'
      })
      t2.forEach(element => {
        //element.textContent = 'All demo classes updated.';
        element.style.color = '#fff'
      })
      t3.forEach(element => {
        //element.textContent = 'All demo classes updated.';
        element.style.color = '#fff'
      })*/
      t4.forEach(element => {
        //element.textContent = 'All demo classes updated.';
        element.style.color = 'rgba(139,167,139,0.9)'
      })
      t5.forEach(element => {
        //element.textContent = 'All demo classes updated.';
        element.style.color = '#fff'
        element.style.background = ''
      })
      t6.forEach(element => {
        //element.textContent = 'All demo classes updated.';
        element.style.color = '#fff'
        element.style.background = 'rgba(139,167,139,0.9)'
      })

      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = translations["de"][key];
      });
      /*
      document.querySelectorAll(".english").forEach(element => {
        element.classList.remove("active")
      })      
      document.querySelectorAll(".deutsch").forEach(element => {
        element.classList.add("active")
      })*/

    } else {

      document.documentElement.lang = "en";

      document.querySelector('#coverOverlay').style.background = ''
      document.querySelector('#footerOverlay').style.background = ''
      document.querySelector('.fh5co-bg-dark').style.background = 'rgba(154,165,202,0.9)'
      //document.querySelector('#coverOverlay').style.background = 'rgba(154,165,202,0.9)'
      //document.querySelector('#coverOverlay').classList.add('overlay')
      //document.querySelector('#coverOverlay').classList.remove('overlay-deutsch')
      document.querySelector('#coverOverlay').classList.replace('overlay-deutsch','overlay')
      //document.querySelector('body').style.background = "#fff"
      //document.querySelector('body').style.color = 'black'

      const t1 = document.querySelectorAll('.info li .first-block')
      const t2 = document.querySelectorAll('.info li .second-block')
      const t3 = document.querySelectorAll('h2')
      const t4 = document.querySelectorAll('#resumeButton')
      const t5 = document.querySelectorAll('#socialIcon-1')
      const t6 = document.querySelectorAll('#socialIcon-2')
      /*t1.forEach(element => {
        //element.textContent = 'All demo classes updated.';
        element.style.color = '#000'
      })
      t2.forEach(element => {
        //element.textContent = 'All demo classes updated.';
        element.style.color = 'rgba(0, 0, 0, 0.5)'
      })
      t3.forEach(element => {
        //element.textContent = 'All demo classes updated.';
        element.style.color = '#000'
      })*/
      t4.forEach(element => {
        //element.textContent = 'All demo classes updated.';
        element.style.color = 'rgb(154,165,202)'
      })
      t5.forEach(element => {
        //element.textContent = 'All demo classes updated.';
        element.style.color = '#fff'
        element.style.background = ''
      })
      t6.forEach(element => {
        //element.textContent = 'All demo classes updated.';
        element.style.color = '#fff'
        element.style.background = 'rgb(154,165,202)'
      })

      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = translations["en"][key];
      });

      /*document.querySelectorAll(".deutsch").forEach(element => {
        element.classList.remove("active")
      })      
      document.querySelectorAll(".english").forEach(element => {
        element.classList.add("active")
      })*/

    }
    const languageSwitcher = document.querySelector('#bd-language')

    if (!languageSwitcher) {
      return
    }

    const languageSwitcherText = document.querySelector('#bd-language-text')
    //const activeLanguageIcon = document.querySelector('.language-icon-active use')
    const btnToActive = document.querySelector(`[data-bs-language-value="${language}"]`)
    const svgOfActiveBtn = btnToActive.querySelector('svg use').getAttribute('href')

    document.querySelectorAll('[data-bs-language-value]').forEach(element => {
      element.classList.remove('active')
      element.setAttribute('aria-pressed', 'false')
    })

    btnToActive.classList.add('active')
    btnToActive.setAttribute('aria-pressed', 'true')
    //activeLanguageIcon.setAttribute('href', svgOfActiveBtn)
    const languageSwitcherLabel = `${languageSwitcherText.textContent} (${btnToActive.dataset.bsLanguageValue})`
    languageSwitcher.setAttribute('aria-label', languageSwitcherLabel)

    if (focus) {
      languageSwitcher.focus()
    }
  }

  window.addEventListener('storage', () => {
    const storedLanguage = getStoredLanguage()
    if (storedLanguage !== 'en' && storedLanguage !== 'de') {
      setLanguage(getPreferredLanguage())
    }
  })

  window.addEventListener('DOMContentLoaded', () => {
    showActiveLanguage(getPreferredLanguage())

    document.querySelectorAll('[data-bs-language-value]')
      .forEach(toggle => {
        toggle.addEventListener('click', () => {
          const language = toggle.getAttribute('data-bs-language-value')
          setStoredLanguage(language)
          setLanguage(language)
          showActiveLanguage(language, true)
        })
      })
  })
})()
