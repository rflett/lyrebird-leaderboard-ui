import React from 'react';
import "./Header.scss";
import userIcon from "./user.svg";
import { Link } from "react-router-dom";

interface HeaderProps {
}

export default function Header(props: HeaderProps) {
    return (
        <header className="header">
            <div className="header-content card">
                <Link to="/login">
                    <button>
                        <img title="Manage" src={userIcon}/>
                    </button>
                </Link>
            </div>
        </header>
    );
}
