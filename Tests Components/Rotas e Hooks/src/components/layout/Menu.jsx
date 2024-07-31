import React from 'react'

import './Menu.css'

import { Link } from 'react-router-dom'

const Menu = props => (
    <aside className="Menu">
        <nav>
            <ul>
                <li>
                    <Link to="/">Início</Link>
                </li>
                <li>
                    <Link to="/about">Sobre</Link>
                </li>
                <li>
                    <Link to="/param/123">Param 01</Link>
                </li>
                <li>
                    <Link to="/useState">Use State</Link>
                </li>
                <li>
                    <Link to="/useEffect">Use Effect</Link>
                </li>
                <li>
                    <Link to="/useRef">Use Ref</Link>
                </li>
                <li>
                    <Link to="/useMemo">Use Memo</Link>
                </li>
                <li>
                    <Link to="/useCallback">Use Callback</Link>
                </li>
                <li>
                    <Link to="/useContext">Use Context</Link>
                </li>
                <li>
                    <Link to="/forget">404</Link>
                </li>
            </ul>
        </nav>
    </aside>
)

export default Menu
