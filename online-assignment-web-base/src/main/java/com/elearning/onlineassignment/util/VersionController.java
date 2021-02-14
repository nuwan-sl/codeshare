package com.elearning.onlineassignment.util;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.io.IOException;
import java.util.jar.Attributes;
import java.util.jar.Manifest;

@Controller
public class VersionController {

    @Autowired
    ApplicationContext applicationContext;

    @RequestMapping("/version")
    @ResponseBody
    public String getVersion() {

        Resource resource = applicationContext.getResource("/META-INF/MANIFEST.MF");
        String versionString = "<h4>";

        try {
            Manifest manifest = new Manifest(resource.getInputStream());
            if (manifest != null){
                Attributes mainAttributes = manifest.getMainAttributes();
                if(mainAttributes != null){
                    for (Object key : mainAttributes.keySet()) {
                        Attributes.Name name = (Attributes.Name) key;
                        versionString += name.toString() + ":" + mainAttributes.getValue(name) + "<br/>";
                    }
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        return versionString + "</h4>";

    }

}
