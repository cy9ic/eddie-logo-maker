import React, { useEffect } from 'react'
import india from "./../assets/flags/1x1/in.svg"
import usa from "../assets/flags/1x1/us.svg"
import germany from "../assets/flags/1x1/de.svg"
import turkey from "../assets/flags/1x1/tr.svg"
import eddie from "../assets/eddie.jpg"
import af from "./../assets/flags/1x1/af.svg";
import ax from "./../assets/flags/1x1/ax.svg";
import al from "./../assets/flags/1x1/al.svg";
import dz from "./../assets/flags/1x1/dz.svg";
import as from "./../assets/flags/1x1/as.svg";
import ad from "./../assets/flags/1x1/ad.svg";
import ao from "./../assets/flags/1x1/ao.svg";
import ai from "./../assets/flags/1x1/ai.svg";
import aq from "./../assets/flags/1x1/aq.svg";
import ag from "./../assets/flags/1x1/ag.svg";
import ar from "./../assets/flags/1x1/ar.svg";
import am from "./../assets/flags/1x1/am.svg";
import aw from "./../assets/flags/1x1/aw.svg";
import au from "./../assets/flags/1x1/au.svg";
import at from "./../assets/flags/1x1/at.svg";
import az from "./../assets/flags/1x1/az.svg";
import bs from "./../assets/flags/1x1/bs.svg";
import bh from "./../assets/flags/1x1/bh.svg";
import bd from "./../assets/flags/1x1/bd.svg";
import bb from "./../assets/flags/1x1/bb.svg";
import by from "./../assets/flags/1x1/by.svg";
import be from "./../assets/flags/1x1/be.svg";
import bz from "./../assets/flags/1x1/bz.svg";
import bj from "./../assets/flags/1x1/bj.svg";
import bm from "./../assets/flags/1x1/bm.svg";
import bt from "./../assets/flags/1x1/bt.svg";
import bo from "./../assets/flags/1x1/bo.svg";
import bq from "./../assets/flags/1x1/bq.svg";
import ba from "./../assets/flags/1x1/ba.svg";
import bw from "./../assets/flags/1x1/bw.svg";
import bv from "./../assets/flags/1x1/bv.svg";
import br from "./../assets/flags/1x1/br.svg";
import io from "./../assets/flags/1x1/io.svg";
import bn from "./../assets/flags/1x1/bn.svg";
import bg from "./../assets/flags/1x1/bg.svg";
import bf from "./../assets/flags/1x1/bf.svg";
import bi from "./../assets/flags/1x1/bi.svg";
import kh from "./../assets/flags/1x1/kh.svg";
import cm from "./../assets/flags/1x1/cm.svg";
import ca from "./../assets/flags/1x1/ca.svg";
import cv from "./../assets/flags/1x1/cv.svg";
import ky from "./../assets/flags/1x1/ky.svg";
import cf from "./../assets/flags/1x1/cf.svg";
import td from "./../assets/flags/1x1/td.svg";
import cl from "./../assets/flags/1x1/cl.svg";
import cn from "./../assets/flags/1x1/cn.svg";
import cx from "./../assets/flags/1x1/cx.svg";
import cc from "./../assets/flags/1x1/cc.svg";
import co from "./../assets/flags/1x1/co.svg";
import km from "./../assets/flags/1x1/km.svg";
import cg from "./../assets/flags/1x1/cg.svg";
import cd from "./../assets/flags/1x1/cd.svg";
import ck from "./../assets/flags/1x1/ck.svg";
import cr from "./../assets/flags/1x1/cr.svg";
import hr from "./../assets/flags/1x1/hr.svg";
import cu from "./../assets/flags/1x1/cu.svg";
import cw from "./../assets/flags/1x1/cw.svg";
import cy from "./../assets/flags/1x1/cy.svg";
import cz from "./../assets/flags/1x1/cz.svg";
import dk from "./../assets/flags/1x1/dk.svg";
import dj from "./../assets/flags/1x1/dj.svg";
import dm from "./../assets/flags/1x1/dm.svg";
import do_ from "./../assets/flags/1x1/do.svg";
import ec from "./../assets/flags/1x1/ec.svg";
import eg from "./../assets/flags/1x1/eg.svg";
import sv from "./../assets/flags/1x1/sv.svg";
import gq from "./../assets/flags/1x1/gq.svg";
import er from "./../assets/flags/1x1/er.svg";
import ee from "./../assets/flags/1x1/ee.svg";
import sz from "./../assets/flags/1x1/sz.svg";

import { useRef } from 'react'

import { useState } from 'react';
export default function Page() {
    const [selectedCountry, setSelectedCountry] = useState("India");
    const map = {
        'India': india,
        'USA': usa,
        'Germany': germany,
        'Turkey': turkey,
        'Afghanistan': af,
        'Aland Islands': ax,
        'Albania': al,
        'Algeria': dz,
        'American Samoa': as,
        'Andorra': ad,
        'Angola': ao,
        'Anguilla': ai,
        'Antarctica': aq,
        'Antigua and Barbuda': ag,
        'Argentina': ar,
        'Armenia': am,
        'Aruba': aw,
        'Australia': au,
        'Austria': at,
        'Azerbaijan': az,
        'Bahamas': bs,
        'Bahrain': bh,
        'Bangladesh': bd,
        'Barbados': bb,
        'Belarus': by,
        'Belgium': be,
        'Belize': bz,
        'Benin': bj,
        'Bermuda': bm,
        'Bhutan': bt,
        'Bolivia': bo,
        'Bonaire, Sint Eustatius and Saba': bq,
        'Bosnia and Herzegovina': ba,
        'Botswana': bw,
        'Bouvet Island': bv,
        'Brazil': br,
        'British Indian Ocean Territory': io,
        'Brunei Darussalam': bn,
        'Bulgaria': bg,
        'Burkina Faso': bf,
        'Burundi': bi,
        'Cambodia': kh,
        'Cameroon': cm,
        'Canada': ca,
        'Cape Verde': cv,
        'Cayman Islands': ky,
        'Central African Republic': cf,
        'Chad': td,
        'Chile': cl,
        'China': cn,
        'Christmas Island': cx,
        'Cocos (Keeling) Islands': cc,
        'Colombia': co,
        'Comoros': km,
        'Congo': cg,
        'Congo, Democratic Republic of the': cd,
        'Cook Islands': ck,
        'Costa Rica': cr,
        'Croatia': hr,
        'Cuba': cu,
        'Curaçao': cw,
        'Cyprus': cy,
        'Czech Republic': cz,
        'Denmark': dk,
        'Djibouti': dj,
        'Dominica': dm,
        'Dominican Republic': do_,
        'Ecuador': ec,
        'Egypt': eg,
        'El Salvador': sv,
        'Equatorial Guinea': gq,
        'Eritrea': er,
        'Estonia': ee,
        'Eswatini': sz,
    };
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        const img2 = new Image();
        img2.src = eddie;
        img2.onload = () => {
            context.drawImage(img2, 0, 0, 450, 550);
        };
    }, []);
    const run = () => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        const img1 = new Image();
        img1.src = map[selectedCountry];
        img1.onload = () => {
            
            context.drawImage(img1, 88, 60, 210, 144);
        };
    };

    const handleDownload = ()=>{
        const canvas = canvasRef.current;
        const url = canvas.toDataURL(); 
        const a = document.createElement('a'); 
        a.href = url; // Set the href attribute to the data URL
        a.download = 'canvas_image.png'; // Set the download attribute to specify the filename
        a.click(); // Programmatically trigger the click event to start the download
    }


    useEffect(()=>{
        run();
        
    },[selectedCountry]);
    
    const handleChange = (e) => {
        setSelectedCountry(e.target.value);
    };
  return (
    <>
    <div className='bg-blue-200 flex-col max-sm:bg-white gap-10 justify-center items-center  h-screen'>
<div className='flex justify-center'>
<p className='text-5xl m-20 font-semibold  text-pretty max-sm:mb-10 max-sm:m-2'>Make your own Eddie logo with your own country!</p>
</div>

<div className="flex max-sm:flex-col justify-center items-center">

    <div className='flex-col h-[400px] w-[600px] max-sm:w-max rounded-xl' >

        <div >
        <img id='img1' src={map[selectedCountry]} alt=""  className='h-[500px] w-[500px] max-sm:h-[350px] max-sm:w-[350px] rounded-xl object-cover' />

        </div>
        <div>
            <select name="Country"  id="ctry" value={selectedCountry} onChange={handleChange} className='border-b-2 overflow-auto h-10 text-2xl outline-none rounded-lg'>
                 <option value="India" className='flex'>India</option>
                            <option value="USA" className='flex'>USA</option>
                            <option value="Germany" className='flex'>Germany</option>
                            <option value="Turkey" className='flex'>Turkey</option>
                            <option value="Afghanistan" className='flex'>Afghanistan</option>
<option value="Aland Islands" className='flex'>Aland Islands</option>
<option value="Albania" className='flex'>Albania</option>
<option value="Algeria" className='flex'>Algeria</option>
<option value="American Samoa" className='flex'>American Samoa</option>
<option value="Andorra" className='flex'>Andorra</option>
<option value="Angola" className='flex'>Angola</option>
<option value="Anguilla" className='flex'>Anguilla</option>
<option value="Antarctica" className='flex'>Antarctica</option>
<option value="Antigua and Barbuda" className='flex'>Antigua and Barbuda</option>
<option value="Argentina" className='flex'>Argentina</option>
<option value="Armenia" className='flex'>Armenia</option>
<option value="Aruba" className='flex'>Aruba</option>
<option value="Australia" className='flex'>Australia</option>
<option value="Austria" className='flex'>Austria</option>
<option value="Azerbaijan" className='flex'>Azerbaijan</option>
<option value="Bahamas" className='flex'>Bahamas</option>
<option value="Bahrain" className='flex'>Bahrain</option>
<option value="Bangladesh" className='flex'>Bangladesh</option>
<option value="Barbados" className='flex'>Barbados</option>
<option value="Belarus" className='flex'>Belarus</option>
<option value="Belgium" className='flex'>Belgium</option>
<option value="Belize" className='flex'>Belize</option>
<option value="Benin" className='flex'>Benin</option>
<option value="Bermuda" className='flex'>Bermuda</option>
<option value="Bhutan" className='flex'>Bhutan</option>
<option value="Bolivia" className='flex'>Bolivia</option>
<option value="Bonaire, Sint Eustatius and Saba" className='flex'>Bonaire, Sint Eustatius and Saba</option>
<option value="Bosnia and Herzegovina" className='flex'>Bosnia and Herzegovina</option>
<option value="Botswana" className='flex'>Botswana</option>
<option value="Bouvet Island" className='flex'>Bouvet Island</option>
<option value="Brazil" className='flex'>Brazil</option>
<option value="British Indian Ocean Territory" className='flex'>British Indian Ocean Territory</option>
<option value="Brunei Darussalam" className='flex'>Brunei Darussalam</option>
<option value="Bulgaria" className='flex'>Bulgaria</option>
<option value="Burkina Faso" className='flex'>Burkina Faso</option>
<option value="Burundi" className='flex'>Burundi</option>
<option value="Cambodia" className='flex'>Cambodia</option>
<option value="Cameroon" className='flex'>Cameroon</option>
<option value="Canada" className='flex'>Canada</option>
<option value="Cape Verde" className='flex'>Cape Verde</option>
<option value="Cayman Islands" className='flex'>Cayman Islands</option>
<option value="Central African Republic" className='flex'>Central African Republic</option>
<option value="Chad" className='flex'>Chad</option>
<option value="Chile" className='flex'>Chile</option>
<option value="China" className='flex'>China</option>
<option value="Christmas Island" className='flex'>Christmas Island</option>
<option value="Cocos (Keeling) Islands" className='flex'>Cocos (Keeling) Islands</option>
<option value="Colombia" className='flex'>Colombia</option>
<option value="Comoros" className='flex'>Comoros</option>
<option value="Congo" className='flex'>Congo</option>
<option value="Congo, Democratic Republic of the" className='flex'>Congo, Democratic Republic of the</option>
<option value="Cook Islands" className='flex'>Cook Islands</option>
<option value="Costa Rica" className='flex'>Costa Rica</option>
<option value="Croatia" className='flex'>Croatia</option>
<option value="Cuba" className='flex'>Cuba</option>
<option value="Curaçao" className='flex'>Curaçao</option>
<option value="Cyprus" className='flex'>Cyprus</option>
<option value="Czech Republic" className='flex'>Czech Republic</option>
<option value="Denmark" className='flex'>Denmark</option>
<option value="Djibouti" className='flex'>Djibouti</option>
<option value="Dominica" className='flex'>Dominica</option>
<option value="Dominican Republic" className='flex'>Dominican Republic</option>
<option value="Ecuador" className='flex'>Ecuador</option>
<option value="Egypt" className='flex'>Egypt</option>
<option value="El Salvador" className='flex'>El Salvador</option>
<option value="Equatorial Guinea" className='flex'>Equatorial Guinea</option>
<option value="Eritrea" className='flex'>Eritrea</option>
<option value="Estonia" className='flex'>Estonia</option>
<option value="Eswatini" className='flex'>Eswatini</option>

            </select>
        </div>
         </div>

    <div className='flex h-[500px] max-sm:h-[300px] w-max border-2 rounded-xl'>
        <div id='' className=''>
    <img src={eddie} alt="" id='img2'  className='hidden h-[450px] w-[550px] rounded-xl object-cover' />
    <canvas ref={canvasRef} id='making' className='max-sm:h-[300px] max-sm:w-[350px]'  width={450} height={550}></canvas>
    <button className='text-2xl bg-black text-white m-1 p-1 ' onClick={handleDownload}>Download</button>

        </div>
    </div>

</div>

    </div>
    </>
  )
}
