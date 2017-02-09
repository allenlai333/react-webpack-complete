import React, { PropTypes } from 'react'

export default class Link extends React.Component{
    render(){
        const { active, children, onClickLink} = this.props;
        if(active){
            return (
                <span>{children}</span>
            );
        }

        return (
            <a href="#"
                onClick={ (e) => {
                    e.preventDefault();
                    onClickLink();
                }}
            >{children}</a>
        );
    }
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}
