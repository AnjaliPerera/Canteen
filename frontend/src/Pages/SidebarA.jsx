import React from 'react';
import { Link } from 'react-router-dom';

export default function SidebarA() {
    return (
        <div style={styles.sidebar}>
            <div style={styles.logoContainer}>
                <img src="/logo.jpg" alt="Logo" style={styles.logo} />
                <h2 style={styles.brandTitle}>Dashboard</h2>
            </div>
            <ul style={styles.menu}>
                <li style={styles.menuItem}>
                    <Link to="/user-table" style={styles.link}>User Table</Link>
                </li>
                <li style={styles.menuItem}>
                    <Link to="/add-user" style={styles.link}>Add User</Link>
                </li>
                <li style={styles.menuItem}>
                    <Link to="/settings" style={styles.link}>Settings</Link>
                </li>
                <li style={styles.menuItem}>
                    <Link to="/reports" style={styles.link}>Reports</Link>
                </li>
            </ul>
        </div>
    );
}

// CSS styles as JavaScript objects
const styles = {
    sidebar: {
        width: '250px',
        backgroundColor: '#FFF3E0',
        color: '#ecf0f1',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        minHeight: '100vh',
    },
    logoContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '30px',
    },
    logo: {
        width: '100px',
        height: 'auto',
        borderRadius: '50%',
        marginBottom: '10px',
    },
    brandTitle: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: '#ecf0f1',
        textAlign: 'center',
    },
    menu: {
        listStyleType: 'none',
        padding: 0,
        width: '100%',
    },
    menuItem: {
        margin: '15px 0',
    },
    link: {
        color: 'black',
        textDecoration: 'none',
        fontSize: '18px',
        padding: '10px',
        display: 'block',
        width: '100%',
        textAlign: 'center',
        borderRadius: '8px',
        transition: 'background 0.3s',
    },
};

// Hover effect using CSS-in-JS is limited, so hover styles would typically be in a CSS file or with CSS-in-JS libraries.
