import React from 'react';
import "./Header.scss";
import userIcon from "./user.svg";
import drumIcon from "./triplej-drum.svg";
import { Link } from "react-router-dom";
import { Page } from "../../../models/enums/page";

interface HeaderProps {
    page: Page
}

export default function Header(props: HeaderProps) {
    return (
        <header className="header">
            <div className="header-content card">
                {props.page === Page.dashboard ?
                    (
                        <Link to="/login">
                            <button>
                                <img title="Manage" alt="User Icon" src={userIcon}/>
                            </button>
                        </Link>
                    ) :
                    (
                        <Link to="/">
                            <button>
                                <img title="Dashboard" alt="JJJ-Logo" src={drumIcon}/>
                            </button>
                        </Link>
                    )
                }
            </div>
        </header>
    );
}
