const createTablesInPostgresDB_subs = require("./db_table_creation_subs");
const createTablesInPostgresDB_subs_discord = require("./db_table_creation_subs_discord");
const createTablesInPostgresDB_subs_video_on_demand = require("./db_table_creation_subs_video_on_demand");
const createTablesInPostgresDB_subs_live_streaming = require("./db_table_creation_subs_live_streaming");
const createTablesInPostgresDB_subs_community_combo = require("./db_table_creation_subs_community_combo");
const createTablesInPostgresDB_subs_video_call = require("./db_table_creation_subs_video_call");
const createTablesInPostgresDB_subs_store = require("./db_table_creation_subs_store");

module.exports = async function createTablesInPostgresDB(pool) {
  ////////////////////////////////////////////////Table Creation/////////////////////////////////////////////////////////

  //1.  User table creation
  // SignUpType => 0: UnamePass, 1: Google, 2: Facebook, 3: Twitter, 10: Google + UnamePass, 20: Facebook + UnamePass, 30: Twitter + UnamePass
  // For SignUpType it can be either of these => 0: UnamePass, 1: Google, 10: First Google, then UnamePass
  // SignInID => In case of google Login use [numeric] Google User Id
  await pool
    .query(
      "CREATE TABLE IF NOT EXISTS Users (UserId BIGSERIAL PRIMARY KEY, EmailAddress VARCHAR(255) NOT NULL UNIQUE, SignUpType INTEGER NOT NULL, SignInID VARCHAR(255) NOT NULL, Password VARCHAR(255) NOT NULL, UserName VARCHAR(50) NOT NULL UNIQUE, FName VARCHAR(255) NOT NULL, LName VARCHAR(255) NOT NULL, Bio VARCHAR(255), IsCreator BOOLEAN NOT NULL, DisplayPicture VARCHAR(100), TwitterHandle VARCHAR(50), Instagram VARCHAR(50), Youtube VARCHAR(50), Website VARCHAR(50));"
    )
    .catch((err) => console.log("PG ERROR Users Table\n\n\t\t", err.message));

  //2.  Creator Fin Info table creation
  await pool
    .query(
      "CREATE TABLE IF NOT EXISTS Fin_Info (Creator VARCHAR(255) PRIMARY KEY, AadharCard VARCHAR(100) UNIQUE NOT NULL, AadharCardLink VARCHAR(100) UNIQUE NOT NULL, PanCard VARCHAR(100) UNIQUE NOT NULL, PanCardLink VARCHAR(100) UNIQUE NOT NULL, UPI_Id VARCHAR(50), IFSC_Code VARCHAR(100), Acc_Number VARCHAR(50));"
    )
    .catch((err) => console.log("PG ERROR Fin_Info Table\n\n\t\t", err.message));

  //1. Video Data from a creator
  // SeriesId: 0 for general videos and specific value when video is a part of series
  await pool
    .query(
      "CREATE TABLE IF NOT EXISTS Creator_video (VideoId VARCHAR(255) PRIMARY KEY, Creator VARCHAR(255) NOT NULL, SeriesId VARCHAR(255), Title VARCHAR(255) NOT NULL, Description Text NOT NULL, Duration INTEGER NOT NULL, CreatedAt TIMESTAMP NOT NULL, UpdatedAt TIMESTAMP NOT NULL);"
    )
    .catch((err) => console.log("PG ERROR Creator_video Table\n\n\t\t", err.message));

  //2. Video Series Data from a creator
  // SeriesId: 0 for general videos and specific value when video is a part of series
  await pool
    .query(
      "CREATE TABLE IF NOT EXISTS Creator_series (SeriesId VARCHAR(255) PRIMARY KEY, Creator VARCHAR(255) NOT NULL, VideoIds TEXT[] UNIQUE NOT NULL, Title VARCHAR(255) NOT NULL, Description Text NOT NULL);"
    )
    .catch((err) => console.log("PG ERROR Creator_series Table\n\n\t\t", err.message));

  //3. Creator LiveStream table creation
  await pool
    .query(
      "CREATE TABLE IF NOT EXISTS Creator_LiveStream (Creator VARCHAR(255) PRIMARY KEY, StreamKey VARCHAR(50) NOT NULL UNIQUE, ViewKey VARCHAR(50) NOT NULL UNIQUE);"
    )
    .catch((err) => console.log("PG ERROR Creator_LiveStream Table\n\n\t\t", err.message));

  //4. Creator Shoutout table creation
  //Platform: 0: Instagram,1: Youtube,2: Twitter,
  // Price in the main table itself since it doesn't need 1m, 3m, 1y pricing
  await pool
    .query(
      "CREATE TABLE IF NOT EXISTS Creator_Shoutout (Id BIGSERIAL PRIMARY KEY, Creator VARCHAR(255) NOT NULL, Platform INTEGER NOT NULL, Count_Per_Week INTEGER NOT NULL, Week_Till_Date_Exhausted INTEGER NOT NULL, Price INTEGER NOT NULL);"
    )
    .catch((err) => console.log("PG ERROR Creator_Shoutout Table\n\n\t\t", err.message));

  //5. Creator Colab table creation
  //Platform: 0: Instagram,1: Youtube,2: Twitter,
  // Price in the main table itself since it doesn't need 1m, 3m, 1y pricing
  await pool
    .query(
      "CREATE TABLE IF NOT EXISTS Creator_Colab (Id BIGSERIAL PRIMARY KEY, Creator VARCHAR(255) NOT NULL, Platform INTEGER NOT NULL, Count_Per_Week INTEGER NOT NULL, Week_Till_Date_Exhausted INTEGER NOT NULL, Price INTEGER NOT NULL);"
    )
    .catch((err) => console.log("PG ERROR Creator_LiveStream Table\n\n\t\t", err.message));

  //6. Creator Discord table creation
  await pool
    .query(
      "CREATE TABLE IF NOT EXISTS Creator_Discord (Creator VARCHAR(255) PRIMARY KEY, ServerId VARCHAR(255) UNIQUE NOT NULL, InviteLink VARCHAR(255) NOT NULL);"
    )
    .catch((err) => console.log("PG ERROR Creator_Discord Table\n\n\t\t", err.message));

  ////////////////////////////////////// Foreign key Constraints Add//////////////////////////////////////////////////////

  // Creator Fin Info Table Creator is User
  await pool.query("DO $$ \
  BEGIN \
      IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'fk_fin_info_creator') THEN \
          ALTER TABLE Fin_Info \
              ADD CONSTRAINT fk_fin_info_creator \
              FOREIGN KEY (Creator) REFERENCES Users(UserName) \
              ON DELETE CASCADE; \
      END IF; \
  END; \
  $$;")
    .catch(err => console.error("fk ERROR Fin_Info Table\n\n\t\t", err.message));

  // Video Table Creator is User
  await pool.query("DO $$ \
  BEGIN \
      IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'fk_video_creator') THEN \
          ALTER TABLE Creator_video \
              ADD CONSTRAINT fk_video_creator \
              FOREIGN KEY (Creator) REFERENCES Users(UserName) \
              ON DELETE CASCADE; \
      END IF; \
  END; \
  $$;")
    .catch(err => console.error("fk ERROR Creator_video Table", err));

  // Video Series Table Creator is User
  await pool.query("DO $$ \
  BEGIN \
      IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'fk_series_creator') THEN \
          ALTER TABLE Creator_series \
              ADD CONSTRAINT fk_series_creator \
              FOREIGN KEY (Creator) REFERENCES Users(UserName) \
              ON DELETE CASCADE; \
      END IF; \
  END; \
  $$;")
    .catch(err => console.error("fk ERROR Creator_series Table", err));

  // Video Table SeriesId
  await pool.query("DO $$ \
  BEGIN \
      IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'fk_video_seriesid') THEN \
          ALTER TABLE Creator_video \
              ADD CONSTRAINT fk_video_seriesid \
              FOREIGN KEY (SeriesId) REFERENCES Creator_series(SeriesId) \
              ON DELETE CASCADE; \
      END IF; \
  END; \
  $$;")
    .catch(err => console.error("fk ERROR Creator_video Table", err));

  // Livestream Table Creator is User
  await pool.query("DO $$ \
  BEGIN \
      IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'fk_livestream_creator') THEN \
          ALTER TABLE Creator_LiveStream \
              ADD CONSTRAINT fk_livestream_creator \
              FOREIGN KEY (Creator) REFERENCES Users(UserName) \
              ON DELETE CASCADE; \
      END IF; \
  END; \
  $$;")
    .catch(err => console.error("fk ERROR Creator_LiveStream Table\n\n\t\t", err.message));

  // Creator_Shoutout Table Creator is User
  await pool.query("DO $$ \
  BEGIN \
      IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'fk_shoutout_creator') THEN \
          ALTER TABLE Creator_Shoutout \
              ADD CONSTRAINT fk_shoutout_creator \
              FOREIGN KEY (Creator) REFERENCES Users(UserName) \
              ON DELETE CASCADE; \
      END IF; \
  END; \
  $$;")
    .catch(err => console.error("fk ERROR Creator_Shoutout Table\n\n\t\t", err.message));

  // Creator_Colab Table Creator is User
  await pool.query("DO $$ \
  BEGIN \
      IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'fk_colab_creator') THEN \
          ALTER TABLE Creator_Colab \
              ADD CONSTRAINT fk_colab_creator \
              FOREIGN KEY (Creator) REFERENCES Users(UserName) \
              ON DELETE CASCADE; \
      END IF; \
  END; \
  $$;")
    .catch(err => console.error("fk ERROR Creator_Colab Table\n\n\t\t", err.message));

  // Creator_Discord Table Creator is User
  await pool.query("DO $$ \
  BEGIN \
      IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'fk_discord_creator') THEN \
          ALTER TABLE Creator_Discord \
              ADD CONSTRAINT fk_discord_creator \
              FOREIGN KEY (Creator) REFERENCES Users(UserName) \
              ON DELETE CASCADE; \
      END IF; \
  END; \
  $$;")
    .catch(err => console.error("fk ERROR Creator_Discord Table\n\n\t\t", err.message));

  // Other Table creation
  // Users, Creator_Series and Creator_Discord are tables with references in other tables via foriegn key hence all other tables can be created once User, Creator_Series and Creator_Discord tables are ready
  createTablesInPostgresDB_subs(pool);
  createTablesInPostgresDB_subs_discord(pool);
  createTablesInPostgresDB_subs_video_on_demand(pool);
  createTablesInPostgresDB_subs_live_streaming(pool);
  createTablesInPostgresDB_subs_community_combo(pool);
  createTablesInPostgresDB_subs_video_call(pool);
  createTablesInPostgresDB_subs_store(pool);

};