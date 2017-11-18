import React from 'react';
import { Menu } from 'antd';
import 'antd/lib/menu/style/index.css';

import SearchSvg from '../asserts/SearchSvg';
import './Menu.css';

const SubMenu = Menu.SubMenu;

export default class MenuComponent extends React.Component {
    state = {
        isSearch: false
    }
    showSearch = () => {
        this.setState( {isSearch:true} )
    }

    render() {
        return (
            <div className='menu-component'>
                <Menu className='main-menu'
                    selectedKeys={[this.state.current]}
                    mode="horizontal">
                    <Menu.Item key="main">Главная</Menu.Item>
                    <SubMenu title={<span>Страны</span>}>
                        <SubMenu key="sub0" title='Вьетнам'>
                            <Menu.Item key="1-1">Ханой</Menu.Item>
                            <Menu.Item key="2-2">Дананг</Menu.Item>
                            <Menu.Item key="3-3">Хойан</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub1" title='Таиланд'>
                            <Menu.Item key="2-1">Краби</Menu.Item>
                            <Menu.Item key="2-2">Аонанг</Menu.Item>
                            <Menu.Item key="2-3">Бангкок</Menu.Item>
                            <Menu.Item key="2-4">Пхукет</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title='Малайзия'>
                            <Menu.Item key="3-1">Лангкави</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3" title='Индонезия'>
                            <Menu.Item key="4-1">Бали</Menu.Item>
                        </SubMenu>
                    </SubMenu>
                    <Menu.Item key="galery">Галерея</Menu.Item>
                    <Menu.Item key="about-me">Об авторе</Menu.Item>
                </Menu>
                <div className='search-svg'>
                    { this.state.isSearch && <input type='text' placeholder='Поиск'/> }
                    <div onClick={this.showSearch}>
                        <SearchSvg/>
                    </div>
                </div>
            </div>
        );
    }
}
