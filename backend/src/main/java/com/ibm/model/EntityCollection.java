/*
 * (C) Copyright IBM Corp. 2017, 2020.
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

import com.ibm.cloud.sdk.core.service.model.GenericModel;
import com.ibm.model.Entity;
import com.ibm.model.Pagination;

import java.util.List;

/** An array of objects describing the model for the workspace. */
public class EntityCollection extends GenericModel {

  protected List<Entity> entities;
  protected Pagination pagination;

  /**
   * Gets the model.
   *
   * <p>An array of objects describing the model defined for the workspace.
   *
   * @return the model
   */
  public List<Entity> getEntities() {
    return entities;
  }

  /**
   * Gets the pagination.
   *
   * <p>The pagination data for the returned objects.
   *
   * @return the pagination
   */
  public Pagination getPagination() {
    return pagination;
  }
}
