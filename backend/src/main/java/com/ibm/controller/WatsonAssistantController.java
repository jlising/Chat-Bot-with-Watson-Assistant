/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ibm.controller;

import com.ibm.component.Assistant;
import com.ibm.model.MessageInput;
import com.ibm.model.MessageOptions;
import com.ibm.model.MessageResponse;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.MediaType;

/**
 *
 * @author JessLISING
 */
@RestController
public class WatsonAssistantController {
    private static final Logger LOG = LoggerFactory.getLogger(WatsonAssistantController.class);

    @Autowired
    Assistant assistant;

    @RequestMapping(value = "/", method = RequestMethod.GET, consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE})
    public String getSessionID(){
        return "hello";
    }

    @RequestMapping(value = "/talk", method = RequestMethod.POST, consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE})
    public List<String> talk(@RequestBody String message){
        LOG.info("Method ping() in class {} was called to checked if logged in.", this.getClass().getName());

        MessageInput messageInput = new MessageInput();
        messageInput.setText(message);
        MessageOptions options = new MessageOptions.Builder("cc8b19f5-7f6a-41cf-9a9a-a3b9b7b8e025").input(messageInput).build();

        MessageResponse response = assistant.message(options).execute().getResult();
        LOG.info("Response is {}", response);

        return response.getOutput().getText();
    }
}
