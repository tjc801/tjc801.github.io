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
      traits: "Data Science | Biotechnology",
      about: "Welcome!",
      name_literal: "Name:",
      email_literal: "Email:",
      email: "info@trevorcasey.io",
      location_literal: "Location:",
      location: "Washington, DC USA",
      workauth_literal: "Work Auth:",
      workauth: "US & EU",
      welcome: "About Me",
      p1: "I am a fourth-year undergraduate studying data science at The George Washington University. Along with a degree concentration in biotechnology, I have also gained practical experience at organizations of varying scale; from early-stage, seed-round ventures to established research laboratories working to integrate biotechnology with the broader data science lifecycle.",
      p2: "I approach data questions with a systems-oriented mindset: identifying signals within noise, converting unstructured inputs into reproducible pipelines, mapping technical and organizational dependencies, and stress-testing my own assumptions. I have successfully applied this approach while collaborating with experienced professionals, new contributors, and both technical and nontechnical audiences.",
      p3: "Nevertheless, I believe social responsibility is as essential to data science as its technical aspect. Since beginning my studies, I have prioritized open-access work where feasible and intentionally developed the ability to communicate complex ideas in clear language. Broadening participation in STEM and leveraging technology for good are integral to how I approach the field.",
      start: "Let's Get Started!",
      quals: "View my qualifications and skills below:",
      resume: "View Resume",
    },
    de: {
      name: "Trevor Casey",
      traits: "Datenwissenschaft | Biotechnologie",
      about: "Schön, dass Sie da sind!",
      name_literal: "Name: ",
      email_literal: "E-Mail: ",
      email: "info@trevorcasey.io",
      location_literal: "Standort:",
      location: "USA",
      workauth_literal: "Work Auth:",
      workauth: "EU / US",
      welcome: "Über mich",
      p1: "Ich studiere im vierten Jahr Data Science an der George Washington University (Washington, D.C.) mit Schwerpunkt im Bereich Biotechnology. Im Rahmen meines Studiums konnte ich praktische Erfahrungen in Organisationen unterschiedlicher Größenordnungen sammeln, von Early-Stage-Start-ups bis hin zu etablierten biotechnologischen Forschungseinrichtungen.",
      p2: "Meine Ausbildung in der Data Science prägt meine analytische Arbeitsweise. Ich arbeite hilfsbereit und systemorientiert: Ich identifiziere relevante Muster in komplexen Datensätzen, überführe unstrukturierte Daten in strukturierte und reproduzierbare Prozesse, analysiere technische sowie organisatorische Abhängigkeiten und überprüfe Annahmen kritisch. Dabei hatte ich das Privileg, an Projekten unterschiedlicher Größenordnung mit erfahrenen Fachkräften, neuen Teammitgliedern sowie technischen und nichttechnischen Zielgruppen zusammenzuarbeiten.",
      p3: "Neben der technischen Kompetenz ist mir ein verantwortungsvoller Umgang mit Daten ein besonderes Anliegen. Wenn es mir möglich ist, engagiere ich mich für offene Wissensformate und übersetze komplexe Inhalte in eine klare, verständliche Sprache. Transparenz und gesellschaftliche Verantwortung sind mir sehr wichtig.",
      start: "Dann beginnen wir doch.",
      quals: "Hier finden Sie meine Berufserfahrungen und Kompetenz:",
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
      document.querySelector('#fh5co-header').style.backgroundImage = "url('images/cover_bg_1.webp')"
      document.querySelector('#coverOverlay').style.background = ''
      document.querySelector('#footerOverlay').style.background = ''
      //document.querySelector('.fh5co-bg-dark').style.background = 'rgba(127,195,240,0.9)'
      document.querySelector('.fh5co-bg-dark').style.background = 'rgba(45, 31, 114, 0.78)'
      //$('div.overlay').animate({backgroundColor: '#FF0000'}, 'slow');
      //document.querySelector('div.overlay').style.background = 'rgba(255,0,0,0.9)'
      //document.querySelector('#coverOverlay').classList.add('overlay-deutsch')
      //document.querySelector('#coverOverlay').classList.remove('overlay')
      document.querySelector('#coverOverlay').classList.replace('overlay','overlay-deutsch')
      //document.querySelector('body').style.background = "rgba(127,195,240,0.9)"
      //document.querySelector('body').style.background = "rgba(127,195,240,0.9)"
      //document.querySelector('body').style.color = 'FloralWhite'

      const t1 = document.querySelectorAll('.info li .first-block')
      const t2 = document.querySelectorAll('.info li .second-block')
      const t3 = document.querySelectorAll('h2')
      const t4 = document.querySelector('#resumeButton')
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
      //t4.style.color = 'rgba(127,195,240,0.9)'
      t4.style.color = 'rgba(45, 31, 114, 0.78)'
      t4.setAttribute("href","/docs/CASEY_Trevor-Lebenslauf.pdf")

      t5.forEach(element => {
        //element.textContent = 'All demo classes updated.';
        element.style.color = '#fff'
        element.style.background = ''
      })
      t6.forEach(element => {
        //element.textContent = 'All demo classes updated.';
        element.style.color = '#fff'
        element.style.background = 'rgba(45, 31, 114, 0.78)'
        //element.style.background = 'rgba(127,195,240,0.9)'
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
      document.querySelector('#fh5co-header').style.backgroundImage = "url('images/cover_bg_4.webp')"
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
      const t4 = document.querySelector('#resumeButton')
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
      t4.style.color = 'rgb(154,165,202)'
      t4.setAttribute("href","/docs/CASEY_Trevor-Resume.pdf")

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
