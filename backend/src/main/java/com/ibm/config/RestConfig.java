package com.ibm.config;

import com.ibm.cloud.sdk.core.security.Authenticator;
import com.ibm.cloud.sdk.core.security.IamAuthenticator;
import com.ibm.component.Assistant;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

/**
 * @author Jesus Lising <jess.lising@gmail.com>
 */

@Configuration
@ComponentScan(basePackages = {"com.ibm"})
public class RestConfig {
    private static final Logger LOG = LoggerFactory.getLogger(RestConfig.class);
    private static String WATSON_SERVICE_URL = "https://api.us-south.assistant.watson.cloud.ibm.com";

    @Bean
    public Assistant getAssistant(){
        Authenticator authenticator = new IamAuthenticator("w-J0DBGFx5t3MyahLAT7vqvo7N9ElLuHtSV7MNP3gDXa");
        Assistant assistant = new Assistant("2020-04-01", authenticator);
        assistant.setServiceUrl(WATSON_SERVICE_URL);
        return assistant;
    }
}
