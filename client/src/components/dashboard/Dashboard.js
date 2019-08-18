import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import Item from '../items/Item'
import { getItems } from '../../actions/item';

const Dashboard = ({ getItems, item: { loading, items } }) => {
    let output;

    useEffect(() => {
        getItems();
    }, [getItems]);


    if (items.length > 0) {
        output = loading ? (<h1>Loading...</h1>) : (items.map(item => <Item key={item._id} id={item._id} name={item.name} price={item.price} url={item.url} goalAchieved={item.goalAchieved} goalPercentage={item.goalPercentage} date={item.date} />))

    } else {
        output = loading ? (<h1>Loading...</h1>) : (<h3>Your Item list is empty :(</h3>)
    }

    return (
        <div>

            <h3 className='display-4'>Dashboard</h3>
            <hr />
            <div className="items">
                {output}
            </div>

        </div>
    )
}

Dashboard.propTypes = {
    item: PropTypes.object.isRequired,
    getItems: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    item: state.item
})

export default connect(mapStateToProps, { getItems })(
    Dashboard
);

