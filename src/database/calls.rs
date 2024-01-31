use surrealdb::sql::Thing;
use crate::handler::api::error::{api_error, ApiError};
use super::*;

impl Database {
    pub async fn create_post(&self, content: String) -> Result<String, ApiError> {
        let post_id = self
            .query(surql::CREATE_POST)
            .bind(("content", content))
            .await?
            .take::<Option<Thing>>(0usize)?
            .ok_or_else(|| api_error!(DatabaseError))?;

        Ok(post_id.id.to_raw())
    }
}
