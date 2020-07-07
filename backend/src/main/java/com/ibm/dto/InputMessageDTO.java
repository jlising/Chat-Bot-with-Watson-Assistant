package com.ibm.dto;

public class InputMessageDTO {
    private String sessionId;
    private String text;

    public String getSessionId() {
        return sessionId;
    }

    public String getText() {
        return text;
    }

    public void setSessionId(String sessionId) {
        this.sessionId = sessionId;
    }

    public void setText(String text) {
        this.text = text;
    }
}
