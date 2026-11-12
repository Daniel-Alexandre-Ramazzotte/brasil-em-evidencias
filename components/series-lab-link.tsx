"use client";
import { useState } from "react";
import type { Indicator, Point } from "@/data/historical";
export function SeriesLabLink({ indicator, points, suffix = "" }: { indicator: Indicator; points: Point[]; suffix?: string }) {
 const [error,setError]=useState("");
 function open(){try{
  const id='brasil:'+indicator.slug+':'+(indicator.locationName||'Brasil')+suffix;
  const series={id,name:indicator.seriesName+(suffix?' · '+suffix:''),sourceId:'brasil-em-evidencias',sourceName:'Brasil em Evidências',theme:indicator.category,geography:indicator.locationName||'Brasil',unit:indicator.unit,frequency:'yearly',definition:indicator.methodology,metadata:{sources:indicator.sources,sourceUrl:location.pathname,caveat:indicator.caveat,frequency:indicator.frequency},points:points.map(p=>({date:p.year+'-01-01',value:p.value}))};
  const token=Date.now().toString(36)+Math.random().toString(36).slice(2);
  sessionStorage.setItem('des-series:'+token,JSON.stringify({version:1,series:[series],selectedId:id,returnUrl:location.pathname+location.search+location.hash}));
  location.assign('/aplicativos/series-temporais/?transfer='+token);
 }catch(e){setError('Não foi possível abrir o laboratório. '+String(e));}}
 return <><button type="button" onClick={open} disabled={!points.length}>Modelar no Laboratório de Séries Temporais{suffix?' · '+suffix:''} ↗</button>{error&&<p role="alert">{error}</p>}</>;
}
