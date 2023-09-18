package com.mertelu.wisata.data.local

import com.mertelu.wisata.data.model.Attraction

object AttractionData {
    
    private val nameList = arrayOf(
        "Green Village",
        "Air Terjun Yohnan",
        "Puncak Cabaan",
    )
    
    private val descriptionList = arrayOf(
        "Situs rekreasi dengan pemandangan yang indah",
        "Kawasan eko-geowisata dengan air terjun yang alami",
        "Tempat camping dengan pemandangan sunrise dan sunset yang indah",
    )
    
    private val imageUrlList = arrayOf(
        "https://drive.google.com/uc?export=view&id=1wBslbpXaUnsoLPj_YHHgq9lRAGAz4wS2",
        "https://drive.google.com/uc?export=view&id=1a40vPpYoVng9L_Eb_EKEaIzAnzYTtezL",
        "https://drive.google.com/uc?export=view&id=1swZ8ifgGl-qWFqk--VJic5c8q7bHdOiw",
    )
    
    private val mapsUrlList = arrayOf(
        "https://goo.gl/maps/rCr4yjbjPghho8Qw6",
        "https://goo.gl/maps/kfuAWkyvNcQqaaCU7",
        "https://goo.gl/maps/biFCc2oV9y2UWArE8",
    )
    
    fun get(): List<Attraction> {
        val attractionList = mutableListOf<Attraction>()
        for (i in nameList.indices) {
            attractionList.add(
                Attraction(
                    name = nameList[i],
                    description = descriptionList[i],
                    imageUrl = imageUrlList[i],
                    mapsUrl = mapsUrlList[i],
                )
            )
        }
        return attractionList
    }
    
}