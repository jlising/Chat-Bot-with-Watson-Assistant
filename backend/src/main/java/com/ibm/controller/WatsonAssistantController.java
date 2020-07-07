/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ibm.controller;

import com.ibm.component.Assistant;
import com.ibm.dto.InputMessageDTO;
import com.ibm.model.*;

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

    @RequestMapping(value = "/session", method = RequestMethod.GET, consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE})
    public SessionResponse createSession(){
        CreateSessionOptions options = new CreateSessionOptions.Builder("91160115-9c06-475e-8799-733d3d0e515f").build();
        SessionResponse response = assistant.createSession(options).execute().getResult();

        return response;
    }

    @RequestMapping(value = "/talk", method = RequestMethod.POST, consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE})
    public String talk(@RequestBody InputMessageDTO inputMessageDTO){
        LOG.info("Method talk() in class {} was called to checked if logged in.", this.getClass().getName());

        MessageInput input = new MessageInput.Builder()
                .messageType("text")
                .text(inputMessageDTO.getText())
                .build();

        MessageOptions options = new MessageOptions.Builder("91160115-9c06-475e-8799-733d3d0e515f", inputMessageDTO.getSessionId())
                .input(input)
                .build();

        MessageResponse response = assistant.message(options).execute().getResult();
        LOG.info("Response is {}", response);

        return response.getOutput().getGeneric().toString();
    }
}
