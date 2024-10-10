import React, { useState,useEffect } from 'react'
import HeaderRiver from './HeaderRiver'
import FooterRiver from "./FooterRiver"
import data from "../camiseta/camisetas.json" 

const allYears =[
    "1901-02",
    "1902-09",
    "1908",
    "1910-17",
    "1918",
    "1920",
    "1923",
    "1925-31",
    "1932",
    "1933",
    "1935",
    "1939",
    "1940",
    "1941",
    "1942",
    "1943",
    "1944",
    "1947",
    "1948",
    "1949",
    "1950",
    "1950-52",
    "1952",
    "1953",
    "1954",
    "1958",
    "1961",
    "1962",
    "1964",    
    "1965", 
    "1968-70", 
    "1969", 
    "1974", 
    "1975", 
    "1979", 
    "1980", 
    "1981", 
    "1982", 
    "1983",
    "1983-84", 
    "1984", 
    "1984-85", 
    "1986-87", 
    "1988-89", 
    "1990-91", 
    "1991-92", 
    "1992-93", 
    "1993-94", 
    "1994-95", 
    "1995-96", 
    "1996-98", 
    "1998-99", 
    "1999-00",
    "2000-01",
    "2001-02",
    "2002-03",
    "2003-04",
    "2004-05",
    "2005-06",
    "2006-07",
    "2007-08",         
    "2008-09",         
    "2009-10",         
    "2010-11",         
    "2011-12",
    "2012-13",
    "2013-14",         
    "2014-15",    
    "2015-16",     
    "2016-17",
    "2017-18",
    "2018-19",
    "2019-20",
    "2020",
    "2021",
    "2022",
    "2023",
    "2024"
    ]


const CamisetasRiver = () => {

      const convertAndSortData = (data) => {
        // Convertir el JSON a un arreglo de objetos
        const dataArray = Object.keys(data).map(key => ({
          year: key,
          details: data[key]
        }));
      
        // Ordenar el arreglo por la clave "year"
        dataArray.sort((a, b) => {
          const yearA = a.year.split('-')[0];
          const yearB = b.year.split('-')[0];
          return yearA - yearB;
        });
      
        return dataArray;
      };

      const sortedData = convertAndSortData(data).reverse();
      console.log(sortedData)

  return (
    <section className='section-camisetas'>

        <HeaderRiver/>

        <div className='container-camisetas'>
            { sortedData &&
                sortedData.map((temporada,index)=>(
                    <div className='container-camisetas-temporada' key={index}>
                        <div className='div-year-marca'>
                           <h1 className='title-year'> {temporada.year} </h1>
                          <p className='paragraph-marca'> {temporada.details[0].marca} </p>
                        </div>
                        <div className='container-all-camisetas'>
                        { temporada.details[0].camiseta.map((all,i)=>(
                            <div className='div-camisetas' key={i}>
                                <div className='container-info-camiseta'>
                                    <img src={all + ".jpg"} alt="Camiseta de River Plate" className='img-camiseta' />
                                    <p className='river'>River Plate</p>
                                    <p className='description-camiseta'> {temporada.details[0].yearCamiseta[i]} </p>
                                </div>
                            </div>
                            ))
                        }
                    </div>
                    </div>
                ))
            }
        </div>

        <FooterRiver/>


    </section>
  )
}

export default CamisetasRiver;

