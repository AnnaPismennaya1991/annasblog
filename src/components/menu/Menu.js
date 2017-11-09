import React from 'react';
import { Menu, Icon } from 'antd';
import 'antd/lib/menu/style/index.css';
import './Menu.css'

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class MenuComponent extends React.Component {
    state = {
        current: 'mail',
    }

    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }

    render() {
        return (
            <Menu className='main-menu'
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal">
                <Menu.Item key="main">Главная</Menu.Item>
                <SubMenu title={<span>Категории</span>}>
                    <MenuItemGroup title="Страны">
                        <Menu.Item key="country:1">Вьетнам</Menu.Item>
                        <Menu.Item key="country:2">Таиланд</Menu.Item>
                        <Menu.Item key="country:3">Малайзия</Menu.Item>
                        <Menu.Item key="country:4">Индонезия</Menu.Item>
                    </MenuItemGroup>
                </SubMenu>
                <Menu.Item key="galery">Галерея</Menu.Item>
                <Menu.Item key="about-me">Об авторе</Menu.Item>
            </Menu>
        );
    }
}
