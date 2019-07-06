import './css/Input.css';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

/**
 * 输入框
 * @author tengge / https://github.com/tengge1
 */
class Input extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this, props.onChange);
        this.handleInput = this.handleInput.bind(this, props.onInput);
    }

    handleChange(onChange, event) {
        onChange && onChange(event.target.value, event);
    }

    handleInput(onInput, event) {
        onInput && onInput(event.target.value, event);
    }

    render() {
        const { className, style, value, onChange, onInput } = this.props;

        return <input
            className={classNames('Input', className)}
            style={style}
            value={value}
            onChange={this.handleChange}
            onInput={this.handleInput} />;
    }
}

Input.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    value: PropTypes.string,
    onChange: PropTypes.func,
    onInput: PropTypes.func,
};

Input.defaultProps = {
    className: null,
    style: null,
    value: '',
    onChange: null,
    onInput: null,
};

export default Input;