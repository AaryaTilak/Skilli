import { Link } from 'react-router-dom'
import { useState } from 'react'

const A = 'https://marketpro.theme.picode.in/assets'

const HeaderTop = () => {
  const [lang, setLang] = useState('Eng')
  const [currency, setCurrency] = useState('USD')
  const [langOpen, setLangOpen] = useState(false)
  const [curOpen, setCurOpen] = useState(false)

  const langs = [
    { name: 'English', flag: 'flag1.png', code: 'Eng' },
    { name: 'Japan', flag: 'flag2.png', code: 'Jpn' },
    { name: 'French', flag: 'flag3.png', code: 'Fr' },
    { name: 'Germany', flag: 'flag4.png', code: 'Ger' },
    { name: 'Bangladesh', flag: 'flag6.png', code: 'Bng' },
    { name: 'South Korea', flag: 'flag5.png', code: 'Kor' },
  ]
  const currencies = [
    { name: 'USD', flag: 'flag1.png' }, { name: 'Yen', flag: 'flag2.png' },
    { name: 'Franc', flag: 'flag3.png' }, { name: 'EURO', flag: 'flag4.png' },
    { name: 'BDT', flag: 'flag6.png' }, { name: 'WON', flag: 'flag5.png' },
  ]

  return (
    <div className="header-top bg-main-600 flex-between">
      <div className="container container-lg">
        <div className="flex-between flex-wrap gap-8">
          <div className="d-flex align-items-center gap-10">
            <span className="text-md fw-medium text-white d-none d-md-flex">Until the end of the sale:</span>
            <span className="text-md fw-medium text-white d-flex d-md-none">Sale end:</span>
            <div className="d-flex align-items-center gap-10">
              {[['35','Days'],['14','Hours'],['54','Minutes'],['28','Sec.']].map(([v,l]) => (
                <div key={l} className="d-flex align-items-center gap-4 text-white">
                  <strong className="text-md fw-semibold">{v}</strong>
                  <span className="text-xs">{l}</span>
                </div>
              ))}
            </div>
          </div>

          <ul className="flex-align flex-wrap d-none d-xl-flex">
            <li className="border-right-item pe-12 me-12">
              <span className="text-white text-sm">Buy one get one free on <span className="text-yellow-300">first order</span></span>
            </li>
            <li className="border-right-item pe-12 me-12">
              <a href="#" onClick={e=>e.preventDefault()} className="text-white text-sm d-flex align-items-center gap-4 hover-text-decoration-underline">
                <img src={`${A}/images/icon/track-icon.png`} alt="Track Icon" />
                <span>Track Your Order</span>
              </a>
            </li>
          </ul>

          <ul className="header-top__right flex-align flex-wrap gap-16 w-auto">
            <li className="d-lg-flex d-none">
              <a href="#" onClick={e=>e.preventDefault()} className="text-white text-sm hover-text-decoration-underline">Order Tracking</a>
            </li>
            <li className="d-lg-flex d-none">
              <a href="#" onClick={e=>e.preventDefault()} className="text-white text-sm hover-text-decoration-underline">About Us</a>
            </li>

            {/* Language */}
            <li className="on-hover-item has-submenu arrow-white position-relative">
              <button type="button" className="selected-text text-white text-sm py-8 bg-transparent border-0 d-flex align-items-center gap-4" onClick={() => setLangOpen(!langOpen)}>
                {lang} <i className="ph ph-caret-down text-xs"></i>
              </button>
              {langOpen && (
                <ul className="selectable-text-list on-hover-dropdown common-dropdown common-dropdown--sm max-h-200 scroll-sm px-0 py-8 position-absolute top-100 end-0 bg-white border border-gray-100 rounded-8 shadow-lg z-10 d-block" style={{minWidth:130}}>
                  {langs.map(l => (
                    <li key={l.code}>
                      <button type="button" className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0 w-100 text-start border-0 bg-transparent" onClick={() => { setLang(l.code); setLangOpen(false) }}>
                        <img src={`${A}/images/thumbs/${l.flag}`} alt="" className="w-16 h-12 rounded-4 border border-gray-100" />
                        {l.name}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Currency */}
            <li className="on-hover-item has-submenu arrow-white position-relative">
              <button type="button" className="selected-text text-white text-sm py-8 bg-transparent border-0 d-flex align-items-center gap-4" onClick={() => setCurOpen(!curOpen)}>
                {currency} <i className="ph ph-caret-down text-xs"></i>
              </button>
              {curOpen && (
                <ul className="selectable-text-list on-hover-dropdown common-dropdown common-dropdown--sm max-h-200 scroll-sm px-0 py-8 position-absolute top-100 end-0 bg-white border border-gray-100 rounded-8 shadow-lg z-10 d-block" style={{minWidth:120}}>
                  {currencies.map(c => (
                    <li key={c.name}>
                      <button type="button" className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0 w-100 text-start border-0 bg-transparent" onClick={() => { setCurrency(c.name); setCurOpen(false) }}>
                        <img src={`${A}/images/thumbs/${c.flag}`} alt="" className="w-16 h-12 rounded-4 border border-gray-100" />
                        {c.name}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default HeaderTop
