import React from 'react'
import data from './Data.json'

function Showprojects() {
    return (
        <>
            <div className="projects" id="projects">
            <h1 className='tc'>My Projects</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">category</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                            {data.map((allData) => {
                                return (
                                    <>
                                    <tr key={allData.id}>
                                        <th scope="row">{allData.id}</th>
                                        <td>{allData.title}</td>
                                        <td>{allData.category}</td>
                                        <td><a href={allData.link}><button className='learn_more_btn'>See Live</button></a></td>
                                    </tr>
                                    </>
                                )}
                            )}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Showprojects