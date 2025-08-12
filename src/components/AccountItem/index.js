import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/f152fc0e326f77fb2d59dd42cd73acb3~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=99832211&x-expires=1755183600&x-signature=y5vB3Ix1%2BBAt930bThsx62QALuo%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my2"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    Nguyen Van A
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>nguyen vana</span>
            </div>
        </div>
    );
}

export default AccountItem;
