/*
 * (C) Copyright IBM Corp. 2018, 2020.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on
 * an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations under the License.
 */
package com.ibm.model;

import com.google.gson.annotations.SerializedName;
import com.ibm.cloud.sdk.core.service.model.GenericModel;
import com.ibm.model.DialogLogMessage;
import com.ibm.model.DialogNodesVisited;

import java.util.List;

/** Additional detailed information about a message response and how it was generated. */
public class MessageOutputDebug extends GenericModel {

  /**
   * When `branch_exited` is set to `true` by the Assistant, the `branch_exited_reason` specifies
   * whether the dialog completed by itself or got interrupted.
   */
  public interface BranchExitedReason {
    /** completed. */
    String COMPLETED = "completed";
    /** fallback. */
    String FALLBACK = "fallback";
  }

  @SerializedName("nodes_visited")
  protected List<com.ibm.model.DialogNodesVisited> nodesVisited;

  @SerializedName("log_messages")
  protected List<com.ibm.model.DialogLogMessage> logMessages;

  @SerializedName("branch_exited")
  protected Boolean branchExited;

  @SerializedName("branch_exited_reason")
  protected String branchExitedReason;

  /**
   * Gets the nodesVisited.
   *
   * <p>An array of objects containing detailed diagnostic information about the nodes that were
   * triggered during processing of the input message.
   *
   * @return the nodesVisited
   */
  public List<DialogNodesVisited> getNodesVisited() {
    return nodesVisited;
  }

  /**
   * Gets the logMessages.
   *
   * <p>An array of up to 50 messages logged with the request.
   *
   * @return the logMessages
   */
  public List<DialogLogMessage> getLogMessages() {
    return logMessages;
  }

  /**
   * Gets the branchExited.
   *
   * <p>Assistant sets this to true when this message response concludes or interrupts a dialog.
   *
   * @return the branchExited
   */
  public Boolean isBranchExited() {
    return branchExited;
  }

  /**
   * Gets the branchExitedReason.
   *
   * <p>When `branch_exited` is set to `true` by the Assistant, the `branch_exited_reason` specifies
   * whether the dialog completed by itself or got interrupted.
   *
   * @return the branchExitedReason
   */
  public String getBranchExitedReason() {
    return branchExitedReason;
  }
}
