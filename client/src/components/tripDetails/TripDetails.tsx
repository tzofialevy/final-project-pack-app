
import React, { useState, useContext } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { dataContext } from '../../dataContexts';
import moment from "moment";

export default function BasicDemo() {

    const dataCtx: any = useContext(dataContext);

    return (
        <Dialog header={dataCtx?.selectedTrip?.name} visible={dataCtx?.visible} style={{ width: '50vw' }} onHide={() => dataCtx.setVisible(false)}>
            <h5>Trip Destination: <strong>{dataCtx?.selectedTrip?.destination}</strong></h5>
            <div className='smallText'><strong>Dates: </strong>{moment(dataCtx?.selectedTrip?.StartDate).format('MMMM DD')} - {moment(dataCtx.selectedTrip?.endDate).format('MMMM DD, YYYY')}</div>
            <div className="mt-2">
                <strong>What I took when I travel in this trip?</strong>
                {
                    dataCtx?.selectedTrip?.products?.length ? dataCtx?.selectedTrip?.products?.map((p: any) => {
                        if (p !== '')
                            return (
                                <div>{p}</div>
                            )
                    }) : <div className="noData">You didn't take something...</div>
                }
            </div>
        </Dialog>
    )
}
