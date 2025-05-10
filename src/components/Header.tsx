import React from 'react';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

const AppHeader: React.FC = () => {
    return (
        <Header>
            <div className="logo" style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>
                DinoApp
            </div>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">Home</Menu.Item>
                <Menu.Item key="2">Dinosaurs</Menu.Item>
            </Menu>
        </Header>
    );
};

export default AppHeader;